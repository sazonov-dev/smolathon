import { combineReducers } from 'redux';
import {cardReducer} from "./cardReducer";

const rootReducer = combineReducers({
    cardReducer: cardReducer
});

export default rootReducer;

// const data = {cards: [
//         {
//             id: "654e7ef5047930d3406dc78e",
//             title: "Смоленская крепость",
//             description: "Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.",
//             image_name: "https://avatars.dzeninfra.ru/get-zen_doc/3530293/pub_6049b6c83949137c742c2472_6049c0f9b101ae42d69f2a80/scale_2400",
//             location: "54.781722, 32.039254",
//             events: [
//                 {
//                     date: "14.11.2023",
//                     time: "14:30"
//                 },
//                 {
//                     date: "16.11.2023",
//                     time: "19:30"
//                 }
//             ],
//             phone_number: "+7 (929) 123-32-21"
//         },
//         {
//             id: "654e7ef5047930d3406dc78f",
//             title: "Свято-Успенский кафедральный собор",
//             description: "Один из старейших храмов России был заложен в 1101 году по приказу самого Владимира Мономаха и долгое время оставался единственных каменным сооружением Смоленска. В 1611 году собор пострадал во время осады города поляками, а в 1677 году его отстроили заново. До начала Великой Отечественной войны здесь хранили первообраз Смоленской иконы Божией Матери. Но в период немецкой оккупации реликвия бесследно исчезла. О ее судьбе до сих пор ничего не известно.",
//             image_name: "https://avatars.dzeninfra.ru/get-zen_doc/3828869/pub_6049b6c83949137c742c2472_6049b791013fe76fa32539df/scale_1200",
//             location: "54.788635, 32.054343",
//             events: [
//                 {
//                     date: "17.11.2023",
//                     time: "12:30"
//                 },
//                 {
//                     date: "19.11.2023",
//                     time: "13:30"
//                 }
//             ],
//             phone_number: "+7 (929) 123-32-21"
//         },
//         {
//             id: "654e7ef5047930d3406dc78d",
//             title: "Набережная Смоленска",
//             description: "Долгое время набережная Смоленска находилась в жутком состоянии. В достойный вид ее привели в 2013 году по случаю 1150-летия города. А в 2014 году вытянувшийся вдоль Днепра променад получил имя князя Владимира. Сейчас это одно из любимых мест для прогулок и среди местных жителей, и среди туристов.",
//             image_name: "https://avatars.dzeninfra.ru/get-zen_doc/4078437/pub_6049b6c83949137c742c2472_6049b7d2752e6e35d1ceb904/scale_1200",
//             location: "54.791045, 32.046464",
//             events: [
//                 {
//                     date: "21.11.2023",
//                     time: "11:30"
//                 },
//                 {
//                     date: "28.11.2023",
//                     time: "10:30"
//                 }
//             ],
//             phone_number: "+7 (929) 123-32-21"
//         },
//     ]}


// const json = {
//     "cards": [
//         {
//             "id": "654e7ef5047930d3406dc78e",
//             "title": "Смоленская крепость",
//             "description": "Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.",
//             "image_name": "https://avatars.dzeninfra.ru/get-zen_doc/3530293/pub_6049b6c83949137c742c2472_6049c0f9b101ae42d69f2a80/scale_2400",
//             "location": "54.781722, 32.039254",
//             "events": [
//                 {
//                     "date": "14.11.2023",
//                     "time": "14:30"
//                 },
//                 {
//                     "date": "16.11.2023",
//                     "time": "19:30"
//                 }
//             ],
//             "phone_number": "+7 (929) 123-32-21"
//         },
//         {
//             "id": "654e7ef5047930d3406dc78f",
//             "title": "Свято-Успенский кафедральный собор",
//             "description": "Один из старейших храмов России был заложен в 1101 году по приказу самого Владимира Мономаха и долгое время оставался единственным каменным сооружением Смоленска. В 1611 году собор пострадал во время осады города поляками, а в 1677 году его отстроили заново. До начала Великой Отечественной войны здесь хранили первообраз Смоленской иконы Божией Матери. Но в период немецкой оккупации реликвия бесследно исчезла. О ее судьбе до сих пор ничего не известно.",
//             "image_name": "https://avatars.dzeninfra.ru/get-zen_doc/3828869/pub_6049b6c83949137c742c2472_6049b791013fe76fa32539df/scale_1200",
//             "location": "54.788635, 32.054343",
//             "events": [
//                 {
//                     "date": "17.11.2023",
//                     "time": "12:30"
//                 },
//                 {
//                     "date": "19.11.2023",
//                     "time": "13:30"
//                 }
//             ],
//             "phone_number": "+7 (929) 123-32-21"
//         },
//         {
//             "id": "654e7ef5047930d3406dc78d",
//             "title": "Набережная Смоленска",
//             "description": "Долгое время набережная Смоленска находилась в жутком состоянии. В достойный вид ее привели в 2013 году по случаю 1150-летия города. А в 2014 году вытянувшийся вдоль Днепра променад получил имя князя Владимира. Сейчас это одно из любимых мест для прогулок и среди местных жителей, и среди туристов.",
//             "image_name": "https://avatars.dzeninfra.ru/get-zen_doc/4078437/pub_6049b6c83949137c742c2472_6049b7d2752e6e35d1ceb904/scale_1200",
//             "location": "54.791045, 32.046464",
//             "events": [
//                 {
//                     "date": "21.11.2023",
//                     "time": "11:30"
//                 },
//                 {
//                     "date": "28.11.2023",
//                     "time": "10:30"
//                 }
//             ],
//             "phone_number": "+7 (929) 123-32-21"
//         }
//     ]
// }

// const json = {
//     "cards":[
//         {
//             "title":"Смоленская крепостьь",
//             "description":"Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.",
//             "image_name":"https://avatars.dzeninfra.ru/get-zen_doc/3530293/pub_6049b6c83949137c742c2472_6049c0f9b101ae42d69f2a80/scale_2400",
//             "location":"54.781722, 32.039254",
//             "events":[
//                 {
//                     "date":"14.11.2023",
//                     "time":"14:30"
//                 },
//                 {
//                     "date":"16.11.2023",
//                     "time":"19:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Свято-Успенский кафедральный собор",
//             "description":"Один из старейших храмов России был заложен в 1101 году по приказу самого Владимира Мономаха и долгое время оставался единственным каменным сооружением Смоленска. В 1611 году собор пострадал во время осады города поляками, а в 1677 году его отстроили заново. До начала Великой Отечественной войны здесь хранили первообраз Смоленской иконы Божией Матери. Но в период немецкой оккупации реликвия бесследно исчезла. О ее судьбе до сих пор ничего не известно.",
//             "image_name":"https://avatars.dzeninfra.ru/get-zen_doc/3828869/pub_6049b6c83949137c742c2472_6049b791013fe76fa32539df/scale_1200",
//             "location":"54.788635, 32.054343",
//             "events":[
//                 {
//                     "date":"17.11.2023",
//                     "time":"12:30"
//                 },
//                 {
//                     "date":"19.11.2023",
//                     "time":"13:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Набережная Смоленска",
//             "description":"Долгое время набережная Смоленска находилась в жутком состоянии. В достойный вид ее привели в 2013 году по случаю 1150-летия города. А в 2014 году вытянувшийся вдоль Днепра променад получил имя князя Владимира. Сейчас это одно из любимых мест для прогулок и среди местных жителей, и среди туристов.",
//             "image_name":"https://avatars.dzeninfra.ru/get-zen_doc/4078437/pub_6049b6c83949137c742c2472_6049b7d2752e6e35d1ceb904/scale_1200",
//             "location":"54.791045, 32.046464",
//             "events":[
//                 {
//                     "date":"21.11.2023",
//                     "time":"11:30"
//                 },
//                 {
//                     "date":"28.11.2023",
//                     "time":"10:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Храм Святого Духа во Флёново",
//             "description":"Один из древнейших монастырей в Смоленске, основанный в XIV веке. Монастырь славится своими древними постройками и историческими артефактами.",
//             "image_name":"https://www.na7holmah-smolensk.ru/wp-content/uploads/2017/10/Hram-Svyatogo-Duha.jpg",
//             "location":"54.658516, 32.209256",
//             "events":[
//                 {
//                     "date":"19.11.2023",
//                     "time":"10:30"
//                 },
//                 {
//                     "date":"20.11.2023",
//                     "time":"14:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Памятник воинам, защитникам и освободителям Смоленска",
//             "description":"Воздвигнут памятник воинам, защитникам и освободителям города Смоленска: русско − польской войны 1609−1611 годы, Отечественной войны 1812 года и Великой Отечественной войны 1941 − 1945 года на площади Победы. Он представляет собой гранитную стелу, украшенную бронзовыми фигурами воинов−освободителей. Скульптор − Игорь Чумаков. Общая высота памятника составляет 13 метров, высота фигур − 2,7 метра. Торжественное открытие памятника состоялось 8 мая 2015 года.",
//             "image_name":"https://www.smoladmin.ru/files/1156/41.jpg",
//             "location":"54.783354, 32.039755",
//             "events":[
//                 {
//                     "date":"13.11.2023",
//                     "time":"16:30"
//                 },
//                 {
//                     "date":"15.11.2023",
//                     "time":"18:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Памятник А. Твардовскому и В. Теркину",
//             "description":"Расположен в центре города, на площади Победы. Скульптор А. Г. Сергеев запечатлел поэта-фронтовика А. Т. Твардовского и воспетого им солдата, неунывающего Василия Тёркина, на привале за дружеской беседой. Памятник отлит из бронзы. Это единственный памятник, изображающий автора и вымышленного героя вместе. Торжественное открытие памятника великому поэту и его литературному герою состоялось накануне пятидесятилетия Великой Победы − 2 мая 1995 года. Теркин изображен со своей гармошкой, а Твардовский внимательно слушает солдатские байки. На постаменте высечены строки из знаменитой поэмы, хорошо знакомые многим с детства. ",
//             "image_name":"",
//             "location":"54.785689, 32.050373",
//             "events":[
//                 {
//                     "date":"17.11.2023",
//                     "time":"12:30"
//                 },
//                 {
//                     "date":"19.11.2023",
//                     "time":"13:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Смоленский государственный университет",
//             "description":"Этот университет является одним из старейших в России и представляет собой значимый образовательный и культурный центр региона. Смоленский государственный университет (СмолГУ) — один из первых вузов, созданных в советское время. Существует с 1918 года. Долгое время функционировал как педагогический вуз. Статус классического университета получил в 2005 году. ",
//             "image_name":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA._%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82..JPG/1200px-%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA._%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82..JPG",
//             "location":"54.785689, 32.050373",
//             "events":[
//                 {
//                     "date":"23.11.2023",
//                     "time":"10:30"
//                 },
//                 {
//                     "date":"24.11.2023",
//                     "time":"18:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Памятник И.М.Кутузову",
//             "description":"Памятник у Соборного холма был воздвигнут по проекту известного советского скульптора Г. И. Мотовилова и архитектора Л. М. Полякова. Работа над ним шла с конца 1940-х годов. Создавая статую М. И. Кутузова, скульптор Мотовилов вдохновлялся толстовским образом великого полководца, известным всем по роману «Война и мир». Открытие памятника состоялось 20 июня 1954 года. Памятник представляет собой бронзовую фигуру фельдмаршала во весь рост на постаменте из розового гранита.",
//             "image_name":"https://upload.wikimedia.org/wikipedia/ru/thumb/a/a5/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%BF%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%86%D1%83_%D0%9A%D1%83%D1%82%D1%83%D0%B7%D0%BE%D0%B2%D1%83_%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA.JPG/1920px-%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%BF%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%86%D1%83_%D0%9A%D1%83%D1%82%D1%83%D0%B7%D0%BE%D0%B2%D1%83_%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA.JPG",
//             "location":"54.789413, 32.051339",
//             "events":[
//                 {
//                     "date":"10.11.2023",
//                     "time":"10:30"
//                 },
//                 {
//                     "date":"12.11.2023",
//                     "time":"14:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Смоленский государственный музей-заповедник",
//             "description":"Смоленский государственный музей-заповедник основан в 1888 году и является одним из крупнейших музейных объединений в России. В его состав входят 15 музеев, которые располагаются в уникальных зданиях – памятниках архитектуры XVII - начала XX вв., а также в бывших усадьбах выдающихся смолян: известной меценатки княгини М.К. Тенишевой, композитора М.И. Глинки, путешественника Н.М. Пржевальского, поэта А.Т. Твардовского. Свыше 660 тысяч предметов сосредоточено в собрании музея: здесь хранятся коллекции по археологии, этнографии, собрания русской и западноевропейской живописи, декоративно-прикладного искусства.",
//             "image_name":"https://smolensk67.biz/source/photos/app/b_c291cmNlL3Bob3Rvcy8yMDE3LzEyLzExLzJhNmI1LWRzYy0wMjY5LmpwZw==_640_02a285d1e1.jpg",
//             "location":"54.780377, 32.046414",
//             "events":[
//                 {
//                     "date":"21.11.2023",
//                     "time":"14:30"
//                 },
//                 {
//                     "date":"22.11.2023",
//                     "time":"16:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         },
//         {
//             "title":"Памятник Святому Георгию Победоносцу",
//             "description":" Церковь Георгия Победоносца была построена в Смоленске в 1782 году, стараниями священника  по фамилии Гетрашевич.  Спустя полвека, в 1826 году рядом с Георгиевской церковью была построена небольшая колокольня.Эта церковь Смоленска является памятником архитектуры барокко. Церковь Георгия Победоносца имеет приделы Владимирской иконы Божьей Матери и великомученика Димитрия Солунского",
//             "image_name":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA.jpg/1920px-%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA.jpg",
//             "location":"47.225990, 39.614264",
//             "events":[
//                 {
//                     "date":"18.11.2023",
//                     "time":"15:30"
//                 },
//                 {
//                     "date":"28.11.2023",
//                     "time":"19:30"
//                 }
//             ],
//             "phone_number":"+7 (929) 123-32-21"
//         }
//     ]
// }
