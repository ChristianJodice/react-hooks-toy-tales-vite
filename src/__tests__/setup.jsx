import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import fetch from 'node-fetch';

global.fetch = fetch

global.baseToys = [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 8
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 14
    },
    {
      "id": 3,
      "name": "Mr. Potato Head",
      "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
      "likes": 3
    },
    {
      "id": 4,
      "name": "Slinky Dog",
      "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
      "likes": 4
    },
    {
        "id": 5,
        "name": "Rex",
        "image": "https://static.wikia.nocookie.net/pixar/images/a/a8/Rex_%28Toy_Story%29.png/revision/latest/scale-to-width-down/377?cb=20210221010941",
        "likes": 1
    }
]

global.alternateToys = [
    {
        "id": 1,
        "name": "Bo Peep",
        "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
        "likes": 2
    },
    {
        "id": 2,
        "name": "Hamm",
        "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
        "likes": 0
    },
    {
        "id": 3,
        "name": "Little Green Men",
        "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
        "likes": -2
    }
]
  
global.setFetchResponse = (val) => {
    global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve(val),
        ok: true,
        status: 200
    }))
}

afterEach(() => {
    cleanup();
})
