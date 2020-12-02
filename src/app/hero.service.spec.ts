import { inject, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Hero } from "./hero";

describe('hero.service', ()=> {
  let mockMessageService
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService}
      ]
    })
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  describe('getHeroe', ()=> {
    it('should send GET api/heroes/1',
      inject([HeroService], (service: HeroService)=> {
        service.getHero(1).subscribe()

        const req = httpTestingController.expectOne('api/heroes/1')
        req.flush({id: 1, name: 'superman'})
        httpTestingController.verify()
      })
    )

    it('should return superman when getHero(1)',
      inject([HeroService], (service: HeroService)=> {
        let recivedHero;
        service.getHero(1).subscribe(hero => recivedHero = hero)

        const req = httpTestingController.expectOne('api/heroes/1')
        req.flush({id: 1, name: 'superman'})
        expect(recivedHero).toEqual({id: 1, name: 'superman'})
      })
    )
  })
})
