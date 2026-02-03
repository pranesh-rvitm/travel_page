import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  title = 'My Travel Blog 🌍';
  icon='assets/images/image.png'

  posts = [
    {
      city: 'Chikkamagaluru',
      description: 'Chikkamagaluru, often referred to as the "Coffee Land of Karnataka," is a haven for trekkers and nature enthusiasts. The region is known for its lush green forests, misty hills, and coffee plantations. The trekking experience here is a blend of adventure and tranquility, offering breathtaking views and a chance to connect with nature.',
      image: 'assets/images/Chikkamagaluru.jpg'
    },
    {
      city: 'Makalidurga Trek',
      description: 'The Makalidurga trek is classified as an easy-grade trek. From Makalidurga Railway Station, you will gain approximately 990 feet in altitude. The Makalidurga trek distance is approximately 7 km for a round trip. The trail is around 4–5 km one way, taking about 3–4 hours to complete.',
      image: 'assets/images/Makalidurga.jpg'
    },
    {
      city: 'Antargange Trek',
      description: 'Anthargange trek, located about 70 km from Bangalore near Kolar, is a popular 3-4 km (total) easy-to-moderate trek known for its rocky boulder-strewn terrain, volcanic caves, and sunrise views. It involves crawling through natural, narrow cave tunnels, making it an adventurous day or night trip that lasts 3-4 hours. ',
      image: 'assets/images/antargange.jpg'
    }
    
    
  ];
}
