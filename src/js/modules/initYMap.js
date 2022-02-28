const initYMap = () => {
    if(ymaps) {
        ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("footer__map", {
                center: [55.720388, 37.636590],
                zoom: 16
            });
    
            var myPlacemark = new ymaps.Placemark([55.720388, 37.636590], {}, {
              iconLayout: 'default#image',
              iconImageHref: 'img/footer/map-icon.png',
              iconImageSize: [60, 79],
              iconImageSize: document.body.clientWidth <= 768 ? [40, 52] : [60, 79],
              iconImageOffset: [-14, -40],
     
          });
            myMap.geoObjects.add(myPlacemark);
        }
    }


}
export default initYMap;