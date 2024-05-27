import { Component, OnInit, OnDestroy } from '@angular/core';
import * as PIXI from 'pixi.js';
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur';
import hsl from 'hsl-to-hex';
import debounce from 'debounce';
import SimplexNoise from 'simplex-noise';

declare var cursoreffects: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})


export class AboutUsComponent implements OnInit, OnDestroy {

  // Add a reference to the cursor to destroy it later
  private cursor: any;
  private app: PIXI.Application;
  private orbs: any[] = [];
  private colorPalette: any;

  ngOnInit() {
    this.initializePixi();
    this.initializeCursor();
    this.addEventListeners();
  }

  ngOnDestroy() {
    // Cleanup to avoid memory leaks
    window.removeEventListener('resize', this.debouncedResize);
    this.cursor?.destroy();
    this.app?.destroy(true, { children: true, texture: true, baseTexture: true });
  }

  private initializePixi() {
    function random(min: any, max: any) {
      return Math.random() * (max - min) + min;
    }

    function map(n: any, start1: any, end1: any, start2: any, end2: any) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    const simplex = new SimplexNoise();

    class ColorPalette {
      hue: number = 0;
      complimentaryHue1: number = 0;
      complimentaryHue2: number = 0;
      saturation: number = 0;
      lightness: number = 0;
      baseColor: string = '';
      complimentaryColor1: string = '';
      complimentaryColor2: string = '';
      colorChoices: string[] = [];

      constructor() {
        this.setColors();
        this.setCustomProperties();
      }

      setColors() {
        this.hue = ~~random(220, 360);
        this.complimentaryHue1 = this.hue + 30;
        this.complimentaryHue2 = this.hue + 60;
        this.saturation = 95;
        this.lightness = 50;

        this.baseColor = hsl(this.hue, this.saturation, this.lightness);
        this.complimentaryColor1 = hsl(this.complimentaryHue1, this.saturation, this.lightness);
        this.complimentaryColor2 = hsl(this.complimentaryHue2, this.saturation, this.lightness);

        this.colorChoices = [this.baseColor, this.complimentaryColor1, this.complimentaryColor2];
      }

      randomColor() {
        return this.colorChoices[~~random(0, this.colorChoices.length)].replace('#', '0x');
      }

      setCustomProperties() {
        document.documentElement.style.setProperty('--hue', this.hue.toString());
        document.documentElement.style.setProperty('--hue-complimentary1', this.complimentaryHue1.toString());
        document.documentElement.style.setProperty('--hue-complimentary2', this.complimentaryHue2.toString());
      }
    }

    class Orb {
      x: number;
      y: number;
      scale: number;
      fill: number;
      radius: number;
      xOff: number;
      yOff: number;
      inc: number;
      graphics: PIXI.Graphics;
      bounds: { x: { min: number; max: number; }; y: { min: number; max: number; }; };

      constructor(fill = 0x000000) {
        this.bounds = this.setBounds();
        this.x = random(this.bounds.x.min, this.bounds.x.max);
        this.y = random(this.bounds.y.min, this.bounds.y.max);
        this.scale = 1;
        this.fill = fill;
        this.radius = random(window.innerHeight / 6, window.innerHeight / 3);
        this.xOff = random(0, 1000);
        this.yOff = random(0, 1000);
        this.inc = 0.002;
        this.graphics = new PIXI.Graphics();
        this.graphics.alpha = 0.825;

        window.addEventListener('resize', debounce(() => {
          this.bounds = this.setBounds();
        }, 250));
      }

      setBounds() {
        const maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
        const originX = window.innerWidth / 1.25;
        const originY = window.innerWidth < 1000 ? window.innerHeight : window.innerHeight / 1.375;

        return {
          x: { min: originX - maxDist, max: originX + maxDist },
          y: { min: originY - maxDist, max: originY + maxDist }
        };
      }

      update() {
        const xNoise = simplex.noise2D(this.xOff, this.xOff);
        const yNoise = simplex.noise2D(this.yOff, this.yOff);
        const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

        this.x = map(xNoise, -1, 1, this.bounds.x.min, this.bounds.x.max);
        this.y = map(yNoise, -1, 1, this.bounds.y.min, this.bounds.y.max);
        this.scale = map(scaleNoise, -1, 1, 0.5, 1);

        this.xOff += this.inc;
        this.yOff += this.inc;
      }

      render() {
        this.graphics.x = this.x;
        this.graphics.y = this.y;
        this.graphics.scale.set(this.scale);
        this.graphics.clear();
        this.graphics.beginFill(this.fill);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
      }
    }

    this.app = new PIXI.Application({
      view: document.querySelector('.orb-canvas') as HTMLCanvasElement,
      resizeTo: window,
      backgroundAlpha: 0
    });

    this.app.stage.filters = [new KawaseBlurFilter(30, 10, true) as unknown as PIXI.Filter];
    this.colorPalette = new ColorPalette();

    for (let i = 0; i < 10; i++) {
      const orb = new Orb(this.colorPalette.randomColor());
      this.app.stage.addChild(orb.graphics);
      this.orbs.push(orb);
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.app.ticker.add(() => {
        this.orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      this.orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  }

  private initializeCursor() {
    const bigSize = 84;
    const smallSize = 34;

    this.cursor = new cursoreffects.fairyDustCursor({ colors: ["#ff0000", "#00ff00", "#0000ff"] });

    document.querySelector('.overlay__btn')?.addEventListener('mouseover', () => {
      this.cursor.destroy();
      this.cursor = new cursoreffects.fairyDustCursor({ colors: ["#ff0000", "#00ff00", "#0000ff"] });
    });

    document.querySelector('.overlay__btn')?.addEventListener('mouseleave', () => {
      this.cursor.destroy();
      this.cursor = new new cursoreffects.fairyDustCursor({ colors: ["#ff0000", "#00ff00", "#0000ff"] });
    });

    document.querySelector('.overlay__btn--colors').addEventListener('mouseover', () => {
      this.cursor.destroy();
      this.cursor = new new cursoreffects.fairyDustCursor({ colors: ["#ff0000", "#00ff00", "#0000ff"] });
    });

    document.querySelector('.overlay__btn--colors').addEventListener('mouseleave', () => {
      this.cursor.destroy();
      this.cursor = new new cursoreffects.fairyDustCursor({ colors: ["#ff0000", "#00ff00", "#0000ff"] });
    });
  }

  private addEventListeners() {
    document.querySelector('.overlay__btn--colors')?.addEventListener('click', () => {
      this.colorPalette.setColors();
      this.colorPalette.setCustomProperties();
      this.orbs.forEach((orb) => {
        orb.fill = this.colorPalette.randomColor();
      });
    });
  }

  private debouncedResize = debounce(() => {
    this.orbs.forEach((orb) => {
      orb.bounds = orb.setBounds();
    });
  }, 250);
}
