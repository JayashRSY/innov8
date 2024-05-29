import { Component } from '@angular/core';
import { emojiCursor, bubbleCursor, characterCursor, ghostCursor, rainbowCursor, springyEmojiCursor, fairyDustCursor } from "cursor-effects";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {

    // rainbowCursor({
    //   length: 3,
    //   colors: ['red', 'blue'],
    //   size: 4
    // });

    // fairyDustCursor({
    //   colors: ["#ff0000", "#00ff00", "#0000ff"],
    // });

    // springyEmojiCursor({ emoji: "😂" });

    // emojiCursor({ emoji: ["I", "N", "N", "O", "V", "8"] });
    characterCursor({
      characters: ["I", "N", "N", "O", "V", "8", "8"],
      colors: [
        "#ffbc00", "#ff0058", "#03a9f4", "#ff0058", "#4dff03", "#00d0ff", "#7f55f9", "#3ed4d9", "#f54b85", "#ffc0cb", "#8711c1", "#2472fc"
      ]
    })
  }

}
