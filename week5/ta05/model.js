const hikeList = [
    {
      id: '0',
      name: 'Bechler Falls',
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81WzhN3F2PL._AC_SX522_.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
      id: '1',
      name: 'Teton Canyon',
      imgSrc: 'https://cdn.jacksonholewy.net/images/content/14443_1131_Teton_Canyon_Alaska_Basin_Trail_Wyoming_lg.jpg',
      imgAlt: 'Image of Teton Canyon',
      distance: '3 miles',
      difficulty: 'Easy',
      description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
      directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
      id: '2',
      name: 'Denanda Falls',
      imgSrc: 'https://i.pinimg.com/originals/d3/17/10/d317102481a3b96cdb21cd1ec2aeaa8f.jpg',
      imgAlt: 'Image of Denanda Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }
  ];
  class Model {
    getAllHikes() {
      return hikeList;
    }
  
    getHikeByName(name) {
      // From teacher solution
      return hikeList.find(hike => hike.name === name);
    }
  }
  
  export default Model;