const menuData = [
    {
        id: "juk",
        category: {
            ru: "Традиционные каши",
            kk: "Дәстүрлі ботқалар",
            en: "Traditional Porridges",
            ko: "전통죽"
        },
        items: [
            { 
                name: { ru: "Овощная каша", kk: "Көкөніс ботқасы", en: "Vegetable Porridge", ko: "야채죽" },
                desc: { ru: "Легкая каша со свежими овощами.", kk: "Жас көкөністер қосылған жеңіл ботқа.", en: "Light porridge with fresh vegetables.", ko: "신선한 야채가 들어간 가벼운 죽." },
                price: "4500", img: "ovoshnaya.jpg" 
            },
            { 
                name: { ru: "Каша с говядиной и грибами", kk: "Сиыр еті мен саңырауқұлақ ботқасы", en: "Beef and Mushroom Porridge", ko: "소고기버섯죽" },
                desc: { ru: "Сытная говядина с грибами.", kk: "Сиыр еті мен саңырауқұлақ қосылған тойымды ботқа.", en: "Hearty beef with mushrooms.", ko: "든든한 소고기와 버섯." },
                price: "4900", img: "s_gribami.jpg" 
            },
            { 
                name: { ru: "Каша с осьминогом и кимчи", kk: "Сегізаяқ пен кимчи ботқасы", en: "Octopus and Kimchi Porridge", ko: "낙지김치죽" },
                desc: { ru: "Нежная каша, опаленный осьминог и пикантная кимчи", kk: "Нәзік ботқа, қурылған сегізаяқ және ащы кимчи", en: "Tender porridge, seared octopus and spicy kimchi", ko: "부드러운 죽, 불맛 나는 낙지와 매콤한 김치" },
                price: "5400", img: "osminog.jpg" 
            },
            { name: { ru: "Каша с тунцом", kk: "Тунец қосылған ботқа", en: "Tuna Porridge", ko: "참치야채죽" }, 
            desc: { ru: "Нежная каша с сочным филе тунца", kk: "Тунец филесі қосылған нәзік ботқа", en: "Tender porridge with tuna", ko: "참치가 들어간 부드러운 죽" }, price: "5200",
             img: "tunec.jpg" },
            { name: { ru: "Юккеджан", kk: "Юккеджан", en: "Yukgaejang", ko: "육개장죽" }, 
            desc: { ru: "Густая каша в стиле острого супа", kk: "Ащы сорпа стиліндегі қою ботқа", en: "Hearty spicy soup style porridge", ko: "얼큰한 육개장 스타일의 죽" }, price: "5200", 
            img: "yuki_kasha.jpg" },
            { name: { ru: "Морская капуста", kk: "Теңіз қырыққабаты", en: "Seaweed Porridge", ko: "미역죽" }, 
            desc: { ru: "С хрустящей морской капустой", kk: "Қытырлақ теңіз балдырларымен", en: "With seaweed", ko: "미역과 함께" }, price: "5200", 
            img: "kapusta.jpg" },
            { name: { ru: "Куринная каша", kk: "Тауық ботқасы", en: "Chicken Porridge", ko: "삼계죽" }, 
            desc: { ru: "Куринная каша на насыщенном бульоне", kk: "Бай сорпадағы тауық ботқасы", en: "In rich broth", ko: "진한 육수에" }, price: "4900",
             img: "kurini_kasha.jpg" },
            { name: { ru: "Сладкая каша с красной фасолью", kk: "Қызыл бұршақ ботқасы", en: "Red Bean Porridge", ko: "단팥죽" }, 
            desc: { ru: "Деликатная сладость бобов", kk: "Бұршақтың нәзік тәттілігі", en: "Delicate sweetness of beans", ko: "달콤한 팥의 맛" }, price: "5200",
             img: "krasnoi_fosol.jpg" },
            { name: { ru: "Каша с креветками", kk: "асшаян ботқасы", en: "Shrimp Porridge", ko: "새우죽" }, 
            desc: { ru: "СБархатистый рис и сочные креветки. Легкий, диетический вкус.", kk: "Барқыт күріш және шырынды асшаяндар. Жеңіл, сау дәм.", en: "With creamy aftertaste", ko: "부드러운 밥과 탱글탱글한 새우. 가볍고 건강한 맛." }, price: "4900",
             img: "krivetki.jpg" },
            { name: { ru: "Сладкая тыквенная каша", kk: "асқабақ ботқасы", en: "Pumpkin Porridge", ko: "단호박죽" }, 
            desc: { ru: "Сладость спелой тыквы", kk: "Піскен асқабақтың тәттілігі", en: "Sweetness of ripe pumpkin", ko: "달콤한 단호박의 맛" }, price: "4800",
             img: "tikva_kasha.jpg" },
            { name: { ru: "Каша с морепродуктами", kk: "теңіз өнімдері ботқасы", en: "Seafood Porridge", ko: "해물죽" },
             desc: { ru: "Сочные дары моря", kk: "Шырынды теңіз өнімдері", en: "Juicy seafood", ko: "신선한 해산물" }, price: "5200", 
            img: "moreproduki.jpg" },
            { name: { ru: "Каша с говядиной и овощами", kk: "сиыр еті мен көкөніс ботқасы", en: "Beef and Vegetable Porridge", ko: "소고기야채죽" }, desc: { ru: "Насыщенный мясной вкус", kk: "Қанық ет дәмі", en: "Rich meat flavor", ko: "진한 소고기 맛" }, price: "4900",
             img: "s_gribami.jpg" }
        ]
    },
    {
        id: "bibim",
        category: { ru: "Пибимпап", kk: "Пибимпап", en: "Bibimbap", ko: "비빔밥" },
        items: [
            { name: { ru: "Бон тольсот пибимпаб", kk: "Бон тольсот пибимпаб", en: "Bon Dolsot Bibimbap", ko: "본돌솥비빔밥" }, desc: { ru: "Традиционное ассорти в каменном горшочке", kk: "Тас кастрөлдегі дәстүрлі ассорти", en: "Traditional mix in a stone pot", ko: "전통 돌솥 비빔밥" }, price: "4700", 
            img: "bon_tolsot.jpg" },
            { name: { ru: "Пулькоги тольсот с говядиной", kk: "Сиыр етімен Пулькоги тольсот", en: "Beef Bulgogi Dolsot", ko: "소불고기 돌솥비빔밥" }, desc: { ru: "Рис, овощные миксы, мясо. Энциклопедия корейского вкуса.", kk: "Тәтті-ащы сиыр еті", en: "Sweet and spicy beef", ko: "달콤 짭짤한 소불고기" }, price: "4900", 
            img: "gava_tolsot.jpg" },
            { name: { ru: "Пулькоги тольсот с курицей", kk: "Тауық етімен Пулькоги тольсот", en: "Spicy Chicken Dolsot", ko: "매콤닭불고기 돌솥비빔밥" }, desc: { ru: "Нежное филе, рис, свежие овощи и яйцо. Сбалансированный и сытный микс.", kk: "нәзік филе, күріш, жаңа піскен көкөністер мен жұмыртқа. Теңдестірілген және қанағаттанарлық қоспасы.", en: "tender fillet, rice, fresh vegetables, and an egg. A balanced and satisfying mix.", ko: "매콤한 소스의 닭고기" }, price: "4900", 
            img: ".jpg" },
            { name: { ru: "Пулькоги тольсот с морепродуктами", kk: "Теңіз өнімдерімен Пулькоги тольсот", en: "Seafood Dolsot", ko: "해물 돌솥비빔밥" }, desc: { ru: "Микс из морепродуктов и овощей", kk: "Теңіз өнімдері мен көкөністер қоспасы", en: "Seafood and vegetable mix", ko: "해산물과 야채의 조화" }, price: "5100", 
            img: "more_tolsot.jpg" }
        ]
    },
{
  id: "soup",
  category: { ru: "Супы", kk: "Сорпалар", en: "Soups", ko: "찌개 & 전골" },
  items: [
    { 
      name: { ru: "Кимчи-чиге", kk: "Кимчи-чиге", en: "Kimchi-jjigae", ko: "김치찌개" }, 
      desc: { 
        ru: "Глубокий пряный вкус", 
        kk: "Терең әрі ащы дәм", 
        en: "Deep and spicy flavor", 
        ko: "깊고 진한 매운맛" 
      }, 
      price: "4500", 
      img: "kimchi.jpg" 
    },
    { 
      name: { ru: "Твенджан-чиге", kk: "Твенджан-чиге", en: "Doenjang-jjigae", ko: "된장찌개" }, 
      desc: { 
        ru: "Классический суп на соевой пасте", 
        kk: "Соя пастасы қосылған классикалық сорпа", 
        en: "Classic soybean paste stew", 
        ko: "구수한 전통 된장찌개" 
      }, 
      price: "4500", 
      img: "tveendzhan.jpg" 
    },
    { 
      name: { ru: "Юккеджан", kk: "Юккеджан", en: "Yukgaejang", ko: "육개장" }, 
      desc: { 
        ru: "Огненный говяжий бульон", 
        kk: "Отты сиыр еті сорпасы", 
        en: "Spicy shredded beef soup", 
        ko: "얼큰하고 시원한 소고기 국물" 
      }, 
      price: "5400", 
      img: "yukedzhan.jpg" 
    },
    { 
      name: { ru: "Кальбитан", kk: "Кальбитан", en: "Galbitang", ko: "갈비탕" }, 
      desc: { 
        ru: "Суп на говяжьих ребрах", 
        kk: "Сиыр қабырғасынан жасалған сорпа", 
        en: "Short rib beef soup", 
        ko: "진하게 우려낸 소갈비탕" 
      }, 
      price: "5300", 
      img: "kalbitan.jpg" 
    },
    { 
      name: { ru: "Острый Рамен", kk: "Ащы Рамен", en: "Spicy Ramen", ko: "매운 라면" }, 
      desc: { 
        ru: "С упругой лапшой и яйцом", 
        kk: "Созылмалы кеспе мен жұмыртқа қосылған", 
        en: "Chewy noodles with egg", 
        ko: "꼬들꼬들한 면발과 계란의 조화" 
      }, 
      price: "2800", 
      img: "ramen.jpg" 
    }
  ]
    },
    {
        id: "box",
        category: {
            ru: "Ланч-боксы",
            kk: "Ланч-бокстар",
            en: "Lunch Boxes",
            ko: "도시락"
        },
        items: [
            { 
                name: { 
                    ru: "Ланч-бокс с острой курицей", 
                    kk: "Ащы тауық етінен жасалған ланч-бокс", 
                    en: "Spicy Chicken Lunch Box", 
                    ko: "매콤닭불고기 도시락" 
                }, 
                desc: { 
                    ru: "Сочные кусочки курицы в обжигающем соусе. Подается с рисом и традиционными закусками.", 
                    kk: "Ащы тұздықтағы шырынды тауық еті. Күрішпен және дәстүрлі тіскебасарлармен ұсынылады.", 
                    en: "juicy chicken pieces in a burning sauce. Served with rice and traditional side dishes.", 
                    ko: "매콤한 소스에 볶은 닭고기와 밥, 전통 반찬이 어우러진 도시락." 
                }, 
                price: "5500", img: "lanch_kurica.jpg" 
            },
            { 
                name: { 
                    ru: "Ланч-бокс с говядиной",kk: "Сиыр етінен жасалған ланч-бокс", 
                    en: "Beef Lunch Box", 
                    ko: "소불고기 도시락" 
                }, 
                desc: { 
                    ru: "Нежная говядина в фирменном соусе, порция рассыпчатого риса и свежие корейские закуски.", 
                    kk: "Фирмалық тұздықтағы нәзік сиыр еті, күріш және жас корей тіскебасарлары.", 
                    en: "Tender beef in signature sauce, a portion of fluffy rice, and fresh Korean side dishes.", 
                    ko: "특제 소스로 볶은 소불고기와 고슬고슬한 밥, 신선한 반찬이 포함된 든든한 한 끼." 
                }, 
                price: "5500", img: "lansh_gav.jpg" 
            },
            { 
                name: { 
                    ru: "Ланч-бокс с морепродуктами", 
                    kk: "Теңіз өнімдерінен жасалған ланч-бокс", 
                    en: "Seafood Lunch Box", 
                    ko: "해물 도시락" 
                }, 
                desc: { 
                    ru: "Микс из морепродуктов, обжаренных с овощами, в сочетании с рисом и закусками.", 
                    kk: "Көкөністермен қуырылған теңіз өнімдерінің қоспасы, күріш пен тіскебасарлар.", 
                    en: "А mix of seafood stir-fried with vegetables, combined with rice and side dishes.", 
                    ko: "야채와 함께 볶은 신선한 해산물과 밥, 반찬이 조화를 이룬 도시락." 
                }, 
                price: "5600", img: "lansh_more.jpg" 
            }
        ]
    },  
    {
        id: "sides",
        category: {
            ru: "Сайды и закуски",
            kk: "Тіскебасарлар",
            en: "Side Dishes",
            ko: "사이드 메뉴"
        },
        items: [
            { 
                name: { ru: "Такканчжон", kk: "Такканчжон", en: "Dakgangjeong", ko: "닭강정" }, 
                desc: { 
                    ru: "Сочные кусочки куриного филе в сладко-пикантном соусе.", 
                    kk: "Тәтті-ащы соустағы тауық филесі.", 
                    en: "Sweet and spicy crispy fried chicken bites.", 
                    ko: "달콤하고 매콤한 소스의 순살 닭강정." 
                }, 
                price: "4200", img: "taca.jpg" 
            },
            { 
                name: { ru: "Ттокпокки", kk: "Ттокпокки", en: "Tteokbokki", ko: "떡볶이" }, 
                desc: { 
                    ru: "Легендарные рисовые клецки в огненно-сладком соусе.", 
                    kk: "Ащы-тәтті соустағы күріш таяқшалары.", 
                    en: "Spicy and sweet stir-fried rice cakes.", 
                    ko: "매콤달콤한 소스의 쫄깃한 떡볶이." 
                }, 
                price: "4500", img: "tokpoki.jpg" 
            },
            { 
                name: { ru: "Хэмуль-пхаджон", kk: "Хэмуль-пхаджон", en: "Haemul Pajeon", ko: "해물파전" }, 
                desc: { 
                    ru: "Традиционный корейский блин с морепродуктами и луком.", 
                    kk: "Теңіз өнімдері мен көк пияз қосылған дәстүрлі корей құймағы.", 
                    en: "Traditional Korean seafood and green onion pancake.", 
                    ko: "해산물과 쪽파가 듬뿍 들어간 전통 해물파전." 
                }, 
                price: "5500", img: "hamul.jpg" 
            },
            { 
                name: { ru: "Пучхучжон", kk: "Пучхучжон", en: "Buchujeon", ko: "부추전" }, 
                desc: { 
                    ru: "Ароматный блин с большим количеством сочного джусая.", 
                    kk: "Джусай қосылған хош иісті құймақ.", 
                    en: "Fragrant chive pancake fried until golden.", 
                    ko: "부추가 듬뿍 들어가 고소하고 바삭한 부추전." 
                }, 
                price: "4800", img: "pudzh.jpg" 
            },
            { 
                name: { ru: "Кимчи-поккым паб", kk: "Кимчи-поккым паб", en: "Kimchi Fried Rice", ko: "김치볶음밥" }, 
                desc: { 
                    ru: "Ароматный рис, обжаренный с кимчи и специями.", 
                    kk: "Кимчи мен дәмдеуіштер қосып қуырылған хош иісті күріш.", 
                    en: "Flavorful fried rice with kimchi and spicy seasonings.", 
                    ko: "매콤한 김치와 함께 볶아낸 고소한 김치볶음밥." 
                },price: "4500", img: "ris_kimchi.jpg" 
            }
        ]
    },
    { 
        id: "salat",
        category: {
            ru: "Салаты",
            kk: "Салаттар",
            en: "Salads",
            ko: "샐러드"
        },
        items: [
            { 
                name: { ru: "Родем", kk: "Родем", en: "Rodem Salad", ko: "로뎀 샐러드" }, 
                desc: { 
                    ru: "Микс из овощей, куриного филе и гренков.", 
                    kk: "Көкөністер, тауық филесі және кептірілген нан қоспасы.", 
                    en: "Mix of fresh vegetables, chicken and croutons.", 
                    ko: "신선한 야채, 닭가슴살, 크루통이 어우러진 샐러드." 
                }, 
                price: "3600", img: "rodem.jpg"
            }
        ]
    },
{
        id: "kimbap",
        category: {
            ru: "Кимбап",
            kk: "Кимбап",
            en: "Kimbap",
            ko: "김밥"
        },
        items: [
            { 
                name: { ru: "Кимпаб с овощами", kk: "Көкөніс кимпабы", en: "Vegetable Kimbap", ko: "야채김밥" }, 
                desc: { 
                    ru: "Традиционные роллы с хрустящими овощами и маринованным дайконом.", 
                    kk: "қытырлақ көкөністер мен маринадталған дайкон қосылған дәстүрлі ролдар.", 
                    en: "Traditional Korean rolls with crunchy vegetables and pickled radish.", 
                    ko: "신선한 야채와 단무지가 들어간 전통 야채김밥." 
                }, 
                price: "2500", img: "kempab_ovsh.jpg" 
            },
            { 
                name: { ru: "Кимпаб с говядиной", kk: "Сиыр етімен кимпаб", en: "Beef Kimbap", ko: "소고기김밥" }, 
                desc: { 
                    ru: "Сытные роллы с сочной обжаренной говядиной и овощами.", 
                    kk: "қурылған шырынды сиыр еті мен көкөністер қосылған тойымды ролдар.", 
                    en: "Hearty rolls with juicy sautéed beef and vegetables.", 
                    ko: "고소하게 볶은 소고기와 야채가 가득한 소고기김밥." 
                }, 
                price: "2800", img: "kempab_gav.jpg" 
            },
            { 
                name: { ru: "Кимпаб с тунцом", kk: "Тунецпен кимпаб", en: "Tuna Kimbap", ko: "참치김밥" }, 
                desc: { 
                    ru: "Популярные роллы с начинкой из тунца, майонеза и овощей.", 
                    kk: "Тунец, майонез және көкөністер салынған танымал ролдар.", 
                    en: "Popular rolls with tuna, mayo, and fresh vegetables.", 
                    ko: "고소한 참치와 마요네즈, 야채가 어우러진 참치김밥." 
                }, 
                price: "2900", img: "kempab_tunec.jpg" 
            },
            { 
                name: { ru: "Кимпаб с сыром", kk: "Ірімшікпен кимпаб", en: "Cheese Kimbap", ko: "치즈김밥" }, 
                desc: { 
                    ru: "Нежное сочетание овощей и ломтиков тающего сыра.", 
                    kk: "Көкөністер мен еріген ірімшіктің нәзік үйлесімі.", 
                    en: "Gentle combination of vegetables and melting cheese slices.", 
                    ko: "부드러운 치즈와 야채가 조화를 이루는 치즈김밥." 
                }, 
                price: "2800", img: "kempab_sir.jpg" 
            },
        ]
    },

]

let currentLang = localStorage.getItem('selectedLang') || 'ru';
    
function renderMenu(lang) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    let html = '';
    menuData.forEach(section => {
        html += `
            <section id="${section.id}" class="menu-section">
                <h2 class="category-title">${section.category[lang]}</h2>
                <div class="menu-grid">
                    ${section.items.map((item, index) => `
                        <div class="item-card" onclick="openModal('${section.id}', ${index})">
                            <img src="${item.img}" loading="lazy" alt="${item.name[lang]}">
                            <div class="item-info">
                                <h3>${item.name[lang]}</h3>
                                <p class="price">${item.price} тг</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    });
    container.innerHTML = html;
}

function openModal(sectionId, index) {
    const section = menuData.find(s => s.id === sectionId);
    if (!section) return;
    
    const item = section.items[index];
    const modal = document.getElementById('item-modal');
    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-name').innerText = item.name[currentLang];
    document.getElementById('modal-desc').innerText = item.desc[currentLang];
    document.getElementById('modal-price').innerText = item.price + " тг";
    
    modal.style.display = "flex";
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    renderMenu(lang);
    updateStaticText(lang);
}
document.querySelector('.close-button').onclick = () => {
    document.getElementById('item-modal').style.display = "none";
};

window.onclick = (event) => {
    const modal = document.getElementById('item-modal');
    if (event.target == modal) modal.style.display = "none";
};
document.addEventListener('DOMContentLoaded', () => renderMenu(currentLang));
