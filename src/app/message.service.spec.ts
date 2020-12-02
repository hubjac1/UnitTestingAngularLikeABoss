import { MessageService } from "./message.service";

describe('message.service', ()=> {
  let service: MessageService

  beforeEach(() => {
    service = new MessageService()
  })
  describe('add', () => {
    it('should have no messages to start', () => {
      expect(service.messages.length).toBe(0)
    })
    it('should have one messages after add a message', () => {
      service.add('a message')
      expect(service.messages.length).toBe(1)

      expect(service.messages).toEqual(['a message'])
    })
  })

  // Hands on
  describe('clear', ()=> {
    it('should empty messages', ()=>{
      service.add('a message')
      service.clear()
      expect(service.messages.length).toBe(0)
    })
  })
})

