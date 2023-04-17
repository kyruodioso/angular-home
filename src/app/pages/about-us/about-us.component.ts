import { Component, OnInit } from '@angular/core';
import { Agents } from 'src/app/interfaces/agent.interface';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {

  public agent: Agents[]=[];

  constructor(private agentsService: AgentsService){}

  ngOnInit():void{
    this.agentsService.loadAgents().subscribe( agent=>{
      console.log(agent);
      this.agent = agent;
    })
  }

}
