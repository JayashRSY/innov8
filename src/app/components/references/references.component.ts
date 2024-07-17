import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  profiles = [
    {
      "id": 1,
      "name": "John Doe",
      "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "profile_picture": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "profile_picture": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      "id": 4,
      "name": "Alice Brown",
      "profile_picture": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "profile_picture": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      "id": 6,
      "name": "Emily Wilson",
      "profile_picture": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      "id": 7,
      "name": "Frank Moore",
      "profile_picture": "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      "id": 8,
      "name": "Grace Lee",
      "profile_picture": "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      "id": 9,
      "name": "Henry Walker",
      "profile_picture": "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      "id": 10,
      "name": "Isabella Scott",
      "profile_picture": "https://randomuser.me/api/portraits/women/10.jpg"
    }
  ]

}
