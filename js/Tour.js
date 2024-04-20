AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];

    let prevoiusXPosition = -60;


    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var border_el = this.createBorder(position,item.id);
      
      // Thumbnail Element
      var thumbnail = this.createThumbnail(item);
      border_el.appendChild(thumbnail);
      // Title Text Element
      var  titleEl = this.createTitleEl(position,item);
      border_el.appendChild(titleEl);
      this.placesContainer.appendChild(border_el);
    }
  },

  createBorder:function(position,id){
    var entity_el = document.createElement('a-entity');
    entity_el.setAttribute('id',id);
    entity_el.setAttribute('visible',true)
    entity_el.setAttribute('geometry',{
      primitive:'ring',
      radiusInner:9,
      radiusOuter:10
    })
    entity_el.setAttribute('position',position)
    entity_el.setAttribute('material',{
      color:'#0077CC',
      opacity:1
    })
    return entity_el
  },


  createThumbnail:function(item){
    const entity_el = document.createElement('a-entity')
    entity_el.setAttribute('visible',true)
    entity_el.setAttribute('geometry',{
      primitive:'circle',
      radius:9
    })
    entity_el.setAttribute('material',{
      src:item.url
    })
    return  entity_el
  },

  createTitleEl:function(position,item){
    const entity_el = document.createElement('a-entity')
    entity_el.setAttribute('text',{
      font:'exo2bold',
      align:'center',
      width:70,
      color:'#E65100',
      value:item.title
    });
    var elPosition = position;
    elPosition.y = -20;
    entity_el.setAttribute('position',elPosition);
    entity_el.setAttribute('visible',true);
    return entity_el;
  }
  
});
