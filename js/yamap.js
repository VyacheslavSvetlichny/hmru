ymaps.ready(init)

function init() {
  var myMap = new ymaps.Map('map-point', {
    center: [55.058274584617465, 82.96589868650821],
    zoom: 12,
  })

  myPlacemark = new ymaps.Placemark(
    [55.058274584617465, 82.96589868650821],
    {},
    {
      iconLayout: 'default#image',
    },
  )

  myMap.geoObjects.add(myPlacemark)

  var myMap2 = new ymaps.Map('map-point2', {
    center: [55.058274584617465, 82.96589868650821],
    zoom: 12,
  })

  myPlacemark2 = new ymaps.Placemark(
    [55.058274584617465, 82.96589868650821],
    {},
    {
      iconLayout: 'default#image',
    },
  )

  myMap2.geoObjects.add(myPlacemark2)

  var myMap3 = new ymaps.Map('map-point3', {
    center: [55.058274584617465, 82.96589868650821],
    zoom: 12,
  })

  myPlacemark3 = new ymaps.Placemark(
    [55.058274584617465, 82.96589868650821],
    {},
    {
      iconLayout: 'default#image',
    },
  )

  myMap3.geoObjects.add(myPlacemark3)
}
