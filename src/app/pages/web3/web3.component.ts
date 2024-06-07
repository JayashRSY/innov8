import { Component } from '@angular/core';

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.scss']
})
export class Web3Component {
  cards = [
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Metaverse & Web3 Strategy Consulting",
      description: "Guiding your entry and strategy in the metaverse and Web3 spaces."
    },
    {
      icon: "fas fa-cubes",
      title: "NFT Development",
      description: "Creating and managing non-fungible tokens for various applications."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Wallet Development",
      description: "Developing secure mobile wallets for cryptocurrency transactions."
    },
    {
      icon: "fas fa-file-contract",
      title: "Smart Contract Development",
      description: "Designing and deploying smart contracts for automated agreements."
    },
    {
      icon: "fas fa-paint-brush",
      title: "Branding & Design",
      description: "Creating a compelling brand identity for your blockchain projects."
    },
    {
      icon: "fas fa-users",
      title: "DAO Development",
      description: "Building decentralized autonomous organizations for community governance."
    },
    {
      icon: "fas fa-cube",
      title: "Metaverse 3D Modeling & Architecture",
      description: "Designing and creating 3D models and virtual spaces for the metaverse."
    },
    {
      icon: "fas fa-search",
      title: "User Research & Testing",
      description: "Conducting research and testing to optimize user experience in Web3."
    },
    {
      icon: "fas fa-desktop",
      title: "Web3 UX/UI Design",
      description: "Designing intuitive and engaging user interfaces for Web3 applications."
    },
    {
      icon: "fas fa-chalkboard",
      title: "Metaverse Workshops & Education",
      description: "Providing workshops and educational sessions on the metaverse."
    }
  ];

}
