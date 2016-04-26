var space = d3.select('a-scene');

var scale = 1;

var sun = {
  src: 'yellow',
  position:'0 0 0',
  radius: 1,
};

var mercury = {
  src: 'orange',
  position: '1.5 0 0',
  radius: .25,
};

var venus = {
  src: 'yellowgreen',
  position: '3 0 0',
  radius: .5,
};

var earth = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
};

var mars = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
}

var jupiter = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
}

var saturn = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
}

var uranus = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
}

var neptune = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
}

var pluto = {
  src: '#texture',
  position: '4 0 0',
  radius: 1,
}

var bodies = [
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto
];


space
.selectAll('a-sphere')
.data(bodies)
.enter()
.append('a-sphere')
.attr('radius', ({radius}) => radius)
.attr('color', ({color}) => color)
.attr('position', ({position}) => `${position}`);

var numPlanet = [1];

space.selectAll('.sun')
  .data(numPlanet)
  .enter()

space.selectAll('.planet')
  .data(numPlanet)
  .enter()
  .append('a-sphere')
  .attr('class', 'planet earth')
  .attr('position', '10 0 10')
  .attr('radius', 2.5)
  .attr('src', '#texture')
  .attr('roughness', 0.5)

space.selectAll('.wrapper')
  .data(numPlanet)
  .enter()
  .append('a-sphere')
  .attr('class', 'wrapper earth')
  .attr('radius', 2.4999)
  .attr('color', 'red')
  .attr('opacity', .1)

space.selectAll('.earth')
  .append('a-animation')
  .attr('attribute', 'rotation')
  .attr('repeat', 'indefinite')
  .attr('to', '0 360 0')
  .attr('dur', 100000)

var moon = space.selectAll('.moon')
  .data(numPlanet)
  .enter()
  .append('a-entity')
  .attr('position', '10 0 10');
  moon
  .append('a-animation')
  .attr('attribute', 'rotation')
  .attr('to', '0 360 0')
  .attr('dur', 90000)
  .attr('fill', 'forwards')
  .attr('easing', 'linear')
  .attr('repeat', 'indefinite')
  moon
  .append('a-sphere')
  .attr('class', 'moon')
  .attr('radius', 0.675)
  .attr('src', '#daMoon')
  .attr('position', '50 0 50')
  .attr('roughness', 0,5)


space.selectAll('.stars')
  .data(starGenerator())
  .enter()
  .append('a-sphere')
  .attr('class', 'stars')
  .attr('radius', .08)
  .attr('color', '#FFF')
  // .attr('opacity', 1)
  .attr('position', function(d) {
    var xNum = randomNumberGen(-100, 100) * (Math.floor(Math.random()*2) ? -1:1);
    var yNum = randomNumberGen(-100, 100) * (Math.floor(Math.random()*2) ? -1:1);
    var zNum = randomNumberGen(-100, 100) * (Math.floor(Math.random()*2) ? -1:1);

    return xNum + ' ' + yNum + ' ' + zNum
  })

function starGenerator() {
  var stars = [];

  for(var i = 0; i < 1000; i++) {
    stars.push(i);
  }

  return stars;
}

function randomNumberGen(min, max) {
  return Math.random() * (max-min) + min;
}


