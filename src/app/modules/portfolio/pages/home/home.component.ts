import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { ExperienciasComponent } from '../../components/experiencias/experiencias.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HabilidadesComponent,ExperienciasComponent,ProjetosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
