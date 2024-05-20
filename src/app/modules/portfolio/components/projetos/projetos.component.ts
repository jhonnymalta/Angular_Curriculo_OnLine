import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjetos } from '../../Intefaces/IProjetos';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  public arrayProjetos = signal<IProjetos[]>([
    {
      src:'assets/img/projetotumb.jpg',
      alt: 'Projeto 1',
      title: 'Projeto 1',
      width: '100',
      height:'51',
      description: '',
      links:[{
        textoBotao:'Conheça o projeto',
        href: 'https://google.com.br',
      }        
      ]
    }
  ])
}
