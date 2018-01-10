var gmarkers = [];
var map = null;
  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(49.9873006, 36.2666255),
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);

  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  // Add markers to the map
  // Set up three markers with info windows 
  // add the points    
  var point = new google.maps.LatLng(49.9873006, 36.2666255);
  var marker = createMarker(point, '<div class="map-sidebar-title">Головний офіс де здійснюється обслуговування клієнтів</div><div class="map-sidebar-address">пр. Московський, 94 (БК ХЕМЗ)</div>', '<div class="map-window"><div class="map-window-title">Головний офіс де здійснюється обслуговування клієнтів</div> <div class="map-window-body"><div class="map-window-address">пр. Московський, 94 (БК ХЕМЗ)</div>Пн-Пт: 9:00 - 18:30;<br>Сб: 9:00 - 15:00;<br> Вс: Выходной;</div></div>');

  var point = new google.maps.LatLng(50.0171932, 36.2666255);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №1</div><div class="map-sidebar-address">вул. Валентинівська, 21 (вгору алеєю)</div>', '<div class="map-window"><div class="map-window-title">Відділення №1</div> <div class="map-window-body"><div class="map-window-address">вул. Валентинівська, 21 (вгору алеєю)</div>Пн-Пт: 8:30 - 19:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
var point = new google.maps.LatLng(49.9223779, 36.4100453);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №2</div><div class="map-sidebar-address">вул. Сергія Грицевця ,31 (ринок РТР)</div>', '<div class="map-window"><div class="map-window-title">Відділення №2</div> <div class="map-window-body"><div class="map-window-address">вул. Сергія Грицевця ,31 (ринок РТР)</div>Пн-Пт: 8:00 - 18:00;<br>Сб: 8:30 - 17:00;<br> Вс: 8:30 - 16:00;</div></div>');
  
  var point = new google.maps.LatLng(49.9860754, 36.329475);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №3</div><div class="map-sidebar-address">вул. Салтівське шоссе, 149 (ринок)</div>', '<div class="map-window"><div class="map-window-title">Відділення №3</div> <div class="map-window-body"><div class="map-window-address">вул. Салтівське шоссе, 149 (ринок)</div>Пн-Пт: 8:30 - 19:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
  var point = new google.maps.LatLng(50.0218501, 36.3646654);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №4</div><div class="map-sidebar-address">пр. Тракторбудівників, 160 (навпроти трамвайної зупинки)</div>', '<div class="map-window"><div class="map-window-title">Відділення №4</div> <div class="map-window-body"><div class="map-window-address">пр. Тракторбудівників, 160 (навпроти трамвайної зупинки)</div>Пн-Пт: 9:00 - 18:30;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
  var point = new google.maps.LatLng(50.0262746, 36.3293188);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №5</div><div class="map-sidebar-address">вул. Героїв Праці, 11 (магазин “Взуття”)</div>', '<div class="map-window"><div class="map-window-title">Відділення №5</div> <div class="map-window-body"><div class="map-window-address">вул. Героїв Праці, 11 (магазин “Взуття”)</div>Пн: Выходной;<br> Вт-Пт: 9:00 - 18:00;<br>Сб: 9:00 - 16:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
  var point = new google.maps.LatLng(49.9964038, 36.3501267);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №6</div><div class="map-sidebar-address">пр. Ювілейний,64 (вздовж трамвайної лінії)</div>', '<div class="map-window"><div class="map-window-title">Відділення №6</div> <div class="map-window-body"><div class="map-window-address">пр. Ювілейний,64 (вздовж трамвайної лінії)</div>Пн-Пт: 8:30 - 19:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 17:00;</div></div>');
  
   var point = new google.maps.LatLng(49.998333, 36.329784);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №7</div><div class="map-sidebar-address">пр. Ювілейний, 49/8</div>', '<div class="map-window"><div class="map-window-title">Відділення №7</div> <div class="map-window-body"><div class="map-window-address">пр. Ювілейний, 49/8</div>Пн-Пт: 9:00 - 19:00;<br>Сб: 9:00 - 16:00;<br> Вс: Выходной;</div></div>');
  
   var point = new google.maps.LatLng(49.9893988, 36.2634055);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №8</div><div class="map-sidebar-address">Площа Захисників України, 1 (Кінний критий ринок, біля квітів)</div>', '<div class="map-window"><div class="map-window-title">Відділення №8</div> <div class="map-window-body"><div class="map-window-address">Площа Захисників України, 1 (Кінний критий ринок, біля квітів)</div>Пн: Выходной;<br> Вт-Пт: 8:00 - 16:00;<br>Сб: 8:00 - 16:00;<br> Вс: 8:00 - 15:00;</div></div>');
  
    var point = new google.maps.LatLng(49.966197, 36.218086);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №9</div><div class="map-sidebar-address">вул. Ак. Богомольця, 1а (ринок Новоселівський, в будівлі адміністрації)</div>', '<div class="map-window"><div class="map-window-title">Відділення №9</div> <div class="map-window-body"><div class="map-window-address">вул. Ак. Богомольця, 1а (ринок Новоселівський, в будівлі адміністрації)</div>Пн-Пт: 8:30 - 19:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
    var point = new google.maps.LatLng(49.9966292, 36.3418403);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №10</div><div class="map-sidebar-address">пр. Ювілейний, 57-А (ринок “Привоз”)</div>', '<div class="map-window"><div class="map-window-title">Відділення №10</div> <div class="map-window-body"><div class="map-window-address">пр. Ювілейний, 57-А (ринок “Привоз”)</div>Пн-Пт: 8:30 - 19:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 17:00;</div></div>');
  
    var point = new google.maps.LatLng(50.027923, 36.352905);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №11</div><div class="map-sidebar-address">вул. Гв. Широнінців, 83/26 (ринок “Океан +”)</div>', '<div class="map-window"><div class="map-window-title">Відділення №11</div> <div class="map-window-body"><div class="map-window-address">вул. Гв. Широнінців, 83/26 (ринок “Океан +”)</div>Пн-Пт: 8:30 - 18:30;<br>Сб: 9:00 - 16:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
   var point = new google.maps.LatLng(49.9837085, 36.3571925);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №12</div><div class="map-sidebar-address">вул. Амосова, 34-А (трактир “Звір”)</div>', '<div class="map-window"><div class="map-window-title">Відділення №12</div> <div class="map-window-body"><div class="map-window-address">вул. Амосова, 34-А (трактир “Звір”)</div>Пн-Пт: 9:00 - 19:00;<br>Сб: 9:00 - 16:00;<br> Вс: 9:00 - 15:00;</div></div>');
  
    var point = new google.maps.LatLng(49.960323, 36.32098);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №13</div><div class="map-sidebar-address">Стадіонний проїзд , 5 (магазин  «Новосел»)</div>', '<div class="map-window"><div class="map-window-title">Відділення №13</div> <div class="map-window-body"><div class="map-window-address">Стадіонний проїзд , 5 (магазин  «Новосел»)</div>Пн-Пт: 9:00 - 18:30;<br>Сб: 9:00 - 16:00;<br> Вс: 10:00 - 16:00;</div></div>');
  
     var point = new google.maps.LatLng(49.997642, 36.341842);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №14</div><div class="map-sidebar-address">проспект. Ювілейний, 57/106, літ.”А’-2″(поряд з молочною кухнею)</div>', '<div class="map-window"><div class="map-window-title">Відділення №14</div> <div class="map-window-body"><div class="map-window-address">проспект. Ювілейний, 57/106, літ.”А’-2″(поряд з молочною кухнею)</div>Пн-Пт: 8:00 - 20:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 17:00;</div></div>');
  
  var point = new google.maps.LatLng(50.024812, 36.3424401);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №15</div><div class="map-sidebar-address">вул. Героїв Праці, 15-Б (Магазин взуття «MIDA»)</div>', '<div class="map-window"><div class="map-window-title">Відділення №15</div> <div class="map-window-body"><div class="map-window-address">вул. Героїв Праці, 15-Б (Магазин взуття «MIDA»)</div>Пн-Пт: 8:30 - 19:00;<br>Сб: 9:00 - 16:00;<br> Вс: 9:00 - 16:00;</div></div>');
  
   var point = new google.maps.LatLng(49.956525, 36.3599714);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №16</div><div class="map-sidebar-address">пр. Московський, 256 (супермаркет «Сільпо», 1 поверх)</div>', '<div class="map-window"><div class="map-window-title">Відділення №16</div> <div class="map-window-body"><div class="map-window-address">пр. Московський ,256 (супермаркет «Сільпо», 1 поверх)</div>Пн-Пт: 9:00 - 19:00;<br>Сб: 9:00 - 17:00;<br> Вс: 9:00 - 17:00;</div></div>');
  
   var point = new google.maps.LatLng(49.9855115, 36.2134775);
  var marker = createMarker(point, '<div class="map-sidebar-title">Відділення №17</div><div class="map-sidebar-address">вул. Конєва, 7 (Комунальне підприемство “Міський Архів”)</div>', '<div class="map-window"><div class="map-window-title">Відділення №17</div> <div class="map-window-body"><div class="map-window-address">вул. Конєва, 7 (Комунальне підприемство “Міський Архів”)</div>Пн-Пт: 8:30 - 18:00;<br>Сб: 8:30 - 17:00;<br> Вс: Выходной;</div></div>');
  
    
var infowindow = new google.maps.InfoWindow({
  size: new google.maps.Size(150, 50)
});

// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

// A function to create the marker and set up the event window function 
function createMarker(latlng, name, html) {
  var contentString = html;
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    zIndex: Math.round(latlng.lat() * -100000) << 5
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
  // save the info we need to use later for the side_bar
  gmarkers.push(marker);
  // add a line to the side_bar html
  var sidebar = jQuery('#openm');
  var sidebar_entry = jQuery('<li/>', {
    'html': name,
    'click': function() {
      google.maps.event.trigger(marker, 'click');	
      map.panTo(marker.getPosition());
jQuery(this).addClass("active").siblings().removeClass("active");
    }
  }).appendTo(sidebar);
}

