import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes!:Personne[];
  selectedPersonne!:Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes=[new Personne(1,'sellaouti','aymen',38,'assets/images/rotating_card_profile3.png',777777,'assistant'),
    new Personne(2,'zizou','zidene',38,'assets/images/rotating_card_profile2.png',88888,'footballer')
  ];
  }
  selectPersonne(personne:Personne){
    this.selectedPersonne=personne;
  }
}
