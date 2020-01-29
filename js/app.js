console.log('App was loaded...');

/**
 * Function to ctreate HTML Node
 * @param {String} tag 
 * @param {Array} attrs 
 * @param {Array|String|null} inner 
 * 
 * @return {Node}
 */
const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => {element.setAttribute(attr.name, attr.value.join(' '))});
    inner
        ?
            Array.isArray(inner) ? inner.map(el => element.appendChild(el)):
                element.innerHTML=inner
                :null;
    return element;
}

const renderInApp = htmlNode => {
    document.getElementById('app').innerHTML = ''
    htmlNode.map(el => document.getElementById('app').appendChild(el));
}

const heroWrapper = () => {
    const hero__SubTitleWrapper = createHTMLNode('div', [{name:'class', value:['hero__SubTitleWrapper']}], [
        createHTMLNode('h2',[{name:'class', value:['hero__SubTitle']}],'Hey, did you ever want to hold a Terry fold?'),
        createHTMLNode('h2',[{name:'class', value:['hero__HiddenSubTitle']}],'&nbsp I got one right here, grab my terry flap &nbsp'),
    ])
    const h1 = createHTMLNode('h1', [{name:'class', value:['hero__Title']}],'The Rick and Morty API')
    return createHTMLNode('section',[{name:'class', value:['hero__Wrapper']}],[h1,hero__SubTitleWrapper])
}

const getCharacterCard = ({image,name,id,status,species,gender,origin,location}) => {
    const cardHeader = createHTMLNode('div',[{name:'class', value:['card','header']}], [
        createHTMLNode('div',[{name:'class', value:['card-image']}], [
            createHTMLNode('img',[{name:'src', value:[image]}],null)
        ]),
        createHTMLNode('div',[{name:'class', value:['characterCard__Title']}], [
            createHTMLNode('h2',[{name:'class', value:['characterCard__Name']}],name),
            createHTMLNode('p',[{name:'class', value:['characterCard__Description']}],`id: ${id} - created 2 years ago`),
        ]),
    ])

    const cardInfo = createHTMLNode('div',[{name:'class', value:['card','info']}],[{k:'STATUS',v:status},{k:'SPECIES',v:species},{k:'GENDER',v:gender},{k:'ORIGIN',v:origin.name},{k:'LAST LOCATION',v:location.name}].map(el => {
        return createHTMLNode('div',[{name:'class', value:['characterCard__TextWrapper']}],[
            createHTMLNode('span',[],el.k),
            createHTMLNode('p',[],el.v),
        ])
    }));

    return createHTMLNode('div',[{name:'class', value:['characterCard__Wrapper']}], [cardHeader,cardInfo])
}

const chartersWrapper = heros => {
    return createHTMLNode('section',[{name:'class', value:['showcase__Wrapper']}], [
        createHTMLNode('div',[{name:'class', value:['showcase__Inner']}], heros.map(hero => getCharacterCard(hero)))
    ])
}

let h = [];

renderInApp([heroWrapper(), chartersWrapper(h)]);

setTimeout(()=> {
    h.push({
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
      });
      h.push({
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },)
      console.log('form BE',h)
      renderInApp([heroWrapper(), chartersWrapper(h)]);
}, 3000)