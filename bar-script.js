const barData = [
    {
        id: "coffee",
        category: { ru: "Кофе", kk: "Кофе", en: "Coffee", ko: "커피" },
        items: [
            { 
                name: { ru: "Эспрессо", kk: "Эспрессо", en: "Espresso", ko: "에스프레소" }, 
                desc: { ru: "Крепкий черный кофе с насыщенным ароматом. 50мл", kk: "Қанық хош иісті қою қара кофе. 50мл", en: "Strong black coffee with a rich aroma. 50ml", ko: "진한 향의 강렬한 블랙 커피. 50밀리리터" }, 
                price: "980тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Эспрессо-Доппио", kk: "Эспрессо-Доппио", en: "Espresso Doppio", ko: "에스프레소 도피오" }, 
                desc: { ru: "Две порции классического эспрессо в одной чашке.", kk: "Бір шыныаяқтағы классикалық эспрессоның екі порциясы.", en: "Double shot of classic espresso in one cup.", ko: "한 잔에 담긴 두 샷의 클래식 에스프레소. 0.3밀리리터" }, 
                price: "1100тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Американо", kk: "Американо", en: "Americano", ko: "아메리카노" }, 
                desc: { ru: "Мягкий вкус эспрессо, раскрытый горячей водой.", kk: "Ыстық сумен ашылған эспрессоның жұмсақ дәмі.", en: "Smooth espresso taste diluted with hot water.", ko: "에스프레소에 뜨거운 물을 더한 부드러운 맛. 0.3밀리리터" }, 
                price: "1100тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Американо с молоком", kk: "Сүт қосылған американо", en: "Americano with milk", ko: "밀크 아메리카노" }, 
                desc: { ru: "Классический черный кофе с нежным молочным послевкусием.", kk: "Нәзік сүтті дәмі бар классикалық қара кофе.", en: "Classic black coffee with a gentle milky aftertaste.", ko: "부드러운 우유 맛이 느껴지는 클래식 블랙 커피. 0.3밀리리터" }, 
                price: "1100тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Капучино", kk: "Капучино", en: "Cappuccino", ko: "카푸치노" }, 
                desc: { ru: "Идеальный баланс крепкого эспрессо и шелковистой пены.", kk: "Эспрессо мен жібектей көбіктің тамаша теңгерімі.", en: "Perfect balance of espresso and silky foam.", ko: "에스프레소와 부드러운 거품의 완벽한 조화. 0.3밀리리터" }, 
                price: "1500тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Латте", kk: "Латте", en: "Latte", ko: "라떼" }, 
                desc: { ru: "Самый нежный кофейный напиток для тех, кто любит мягкость.", kk: "Жұмсақтықты ұнататындарға арналған ең нәзік кофе сусыны.", en: "The gentlest coffee drink for those who love smoothness.", ko: "부드러움을 좋아하는 분들을 위한 가장 연한 커피. 0.3밀리리터" }, 
                price: "1600тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Шоколадный латте", kk: "Шоколадты латте", en: "Chocolate Latte", ko: "초코 라떼" }, 
                desc: { ru: "Гармония нежного латте и насыщенного шоколада.", kk: "Нәзік латте мен қою шоколадтың үйлесімі.", en: "Harmony of gentle latte and rich chocolate.", ko: "부드러운 라떼와 진한 초콜릿의 조화." }, 
                price: "1600тг", img: "14.jpg" 
            }
        ]
    },
    {
        id: "ice-coffee",
        category: { ru: "Айс кофе", kk: "Мұздай кофе", en: "Ice Coffee", ko: "아이스 커피" },
        items: [
            { 
                name: { ru: "Айс американо", kk: "Айс американо", en: "Iced Americano", ko: "아이스 아메리카노" }, 
                desc: { ru: "Классический вкус кофе в освежающем ледяном формате. 0.4мл", kk: "Сергітетін мұздай форматтағы классикалық кофе дәмі. 0.4мл", en: "Classic coffee taste in a refreshing icy format.0.4ml", ko: "시원하고 깔끔한 맛의 아이스 아메리카노. 0.4밀리리터" }, 
                price: "1300тг", img: "27.jpg" 
            },
            { 
                name: { ru: "Айс капучино", kk: "Айс капучино", en: "Iced Cappuccino", ko: "아이스 카푸치노" }, 
                desc: { ru: "Крепкий эспрессо и холодное молоко под пышной ледяной пеной.", kk: "Мұздай көбік астындағы қою эспрессо мен суық сүт.", en: "Strong espresso and cold milk under lush ice foam.", ko: "풍부한 거품과 시원한 우유가 만난 아이스 카푸치노. 0.4밀리리터" }, 
                price: "1700тг", img: "28.jpg" 
            },
            { 
                name: { ru: "Айс латте", kk: "Айс латте", en: "Iced Latte", ko: "아이스 라떼" }, 
                desc: { ru: "Нежное сочетание холодного молока и мягкого эспрессо.", kk: "Суық сүт пен жұмсақ эспрессоның нәзік үйлесімі.", en: "Gentle combination of cold milk and smooth espresso.", ko: "시원한 우유와 에스프레소의 부드러운 조화. 0.4밀리리터" }, 
                price: "1800тг", img: "24.jpg" 
            },
            { 
                name: { ru: "Айс шоколадный латте", kk: "Айс шоколадты латте", en: "Iced Chocolate Latte", ko: "아이스 초코 라떼" }, 
                desc: { ru: "Освежающий микс молока, эспрессо и насыщенного шоколада.", kk: "Сүт, эспрессо және қою шоколадтың сергітетін қоспасы.", en: "Refreshing mix of milk, espresso, and rich chocolate.", ko: "우유와 에스프레소, 진한 초코의 시원한 만남. 0.4밀리리터" }, 
                price: "2500тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Эспрессо-Тоник", kk: "Эспрессо-Тоник", en: "Espresso Tonic", ko: "에스프레소 토닉" }, 
                desc: { ru: "Дерзкое сочетание эспрессо, тоника и легкой горчинки.", kk: "Эспрессо, тоник және жеңіл ащылықтың батыл үйлесімі.", en: "Bold combination of espresso, tonic, and a light bitterness.", ko: "에스프레소와 토닉의 톡 쏘는 청량한 만남. 0.4밀리리터" }, 
                price: "1800тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Матча-Эспрессо", kk: "Матча-Эспрессо", en: "Matcha Espresso", ko: "마차 에스프레소" }, 
                desc: { ru: "Эффектный напиток, объединяющий японский чай и кофе.", kk: "Жапон шайы мен кофені біріктіретін әсерлі сусын.", en: "Stunning drink combining Japanese tea and coffee.", ko: "말차와 에스프레소의 이색적인 층차 만남. 0.4밀리리터" }, 
                price: "2300тг", img: "32.jpg" 
            },
            { 
                name: { ru: "Бамбл-Кофе", kk: "Бамбл-Кофе", en: "Bumble Coffee", ko: "범블 커피" }, 
                desc: { ru: "Яркое сочетание эспрессо и апельсинового сока.", kk: "Эспрессо мен апельсин шырынының жарқын үйлесімі.", en: "Bright combination of espresso and orange juice.", ko: "에스프레소와 오렌지 주스의 상큼한 맛. 0.4밀리리터" }, 
                price: "1700тг", img: "8.jpg" 
            }
        ]
    },
    {
        id: "not-coffee",
        category: {
            ru: "Не кофе",
            kk: "Кофе емес",
            en: "Non-Coffee",
            ko: "논커피"
        },
        items: [
            { 
                name: { ru: "Дальгона латте", kk: "Дальгона латте", en: "Dalgona Latte", ko: "달고나 라떼" }, 
                desc: { 
                    ru: "Нежный молочный напиток с густой, карамельной по текстуре пеной из взбитого кофе. 0.45мл", 
                    kk: "Шайқалған кофеден жасалған қою, карамельді көбігі бар нәзік сүт сусыны. 0.45мл", 
                    en: "Gentle milk drink with thick, caramel-textured whipped coffee foam. 0.45ml", 
                    ko: "폭신하고 달콤한 커피 거품이 올라간 부드러운 우유 음료. 0.45밀리리터" 
                }, 
                price: "2300", img: "8.jpg" 
            },
            { 
                name: { ru: "Клубничный латте", kk: "Құлпынай латте", en: "Strawberry Latte", ko: "딸기 라떼" }, 
                desc: { 
                    ru: "Мягкий кофейный вкус в сочетании со сливочным молоком и ароматом спелой клубники. 0.3мл", 
                    kk: "Кілегейлі сүт пен піскен құлпынай хош иісінің нәзік үйлесімі. 0.3мл", 
                    en: "Soft coffee flavor combined with creamy milk and the aroma of ripe strawberries. 0.3ml", 
                    ko: "부드러운 우유와 상큼한 딸기가 조화를 이루는 달콤한 라떼. 0.3밀리리터" 
                }, 
                price: "1800", img: "8.jpg" 
            },
            { 
                name: { ru: "Тыквенный латте", kk: "Асқабақ латте", en: "Pumpkin Latte", ko: "단호박 라떼" }, 
                desc: { 
                    ru: "Нежный латте с насыщенным вкусом тыквенного пирога и мягким сливочным послевкусием. 0.3мл", 
                    kk: "Асқабақ бәлішінің қанық дәмі мен жұмсақ кілегейлі дәмі бар нәзік латте. 0.3мл", 
                    en: "Gentle latte with a rich pumpkin pie flavor and a soft creamy aftertaste. 0.3ml", 
                    ko: "진한 단호박 향과 부드러운 우유가 어우러진 가을의 맛. 0.3밀리리터" 
                }, 
                price: "1800", img: "8.jpg" 
            },
            { 
                name: { ru: "Матча латте", kk: "Матча латте", en: "Matcha Latte", ko: "말차 라떼" }, 
                desc: { 
                    ru: "Мягкий и полезный напиток на основе японского зеленого чая с нежной молочной пенкой. 0.3мл", 
                    kk: "Жапон жасыл шайы негізіндегі, нәзік сүт көбігі бар жұмсақ әрі пайдалы сусын. 0.3мл", 
                    en: "Soft and healthy drink based on Japanese green tea with gentle milk foam. 0.3ml", 
                    ko: "신선한 일본식 말차와 부드러운 우유 거품이 만난 건강한 음료. 0.3밀리리터" 
                }, 
                price: "1800", img: "8.jpg" 
            },
            { 
                name: { ru: "Айс матча латте", kk: "Айс матча латте", en: "Iced Matcha Latte", ko: "아이스 말차 라떼" }, 
                desc: { 
                    ru: "Идеальный напиток для спокойной бодрости, сочетающий травянистую свежесть и ледяную прохладу. 0.4мл", 
                    kk: "Шөптік сергектік пен мұздай салқындықты біріктіретін сергітетін сусын. 0.4мл", 
                    en: "The perfect drink for calm alertness, combining grassy freshness and icy chill. 0.4ml", 
                    ko: "말차의 쌉쌀함과 얼음의 시원함이 만난 청량한 건강 음료. 0.4밀리리터" 
                }, 
                price: "2300", img: "29.jpg" 
            },
            { 
                name: { ru: "Айс тыквенный латте", kk: "Айс асқабақ латте", en: "Iced Pumpkin Latte", ko: "아이스 단호박 라떼" }, 
                desc: { 
                    ru: "Освежающая версия осенней классики с ароматом корицы, имбиря и тыквенным послевкусием. 0.4мл", 
                    kk: "Дәмдеуіштер хош иісі мен асқабақ дәмі бар күзгі классиканың сергітетін нұсқасы. 0.4мл", 
                    en: "A refreshing version of the autumn classic with aromas of cinnamon, ginger, and a pumpkin aftertaste. 0.4ml", 
                    ko: "시나몬과 생강 향이 어우러진 시원한 단호박 음료. 0.4밀리리터" 
                }, 
                price: "2300", img: "30.jpg" 
            },
            { 
                name: { ru: "Айс клубничный латте", kk: "Айс құлпынай латте", en: "Iced Strawberry Latte", ko: "아이스 딸기 라떼" }, 
                desc: { 
                    ru: "Освежающее сочетание холодного молока, эспрессо и яркого клубничного сиропа со льдом. 0.4мл", 
                    kk: "Суық сүт, эспрессо және жарқын құлпынай шәрбатының мұздай үйлесімі. 0.4мл", 
                    en: "Refreshing combination of cold milk, espresso, and bright strawberry syrup with ice. 0.4ml", 
                    ko: "시원한 우유와 진한 딸기 시럽이 만난 상큼한 아이스 라떼. 0.4밀리리터" 
                }, 
                price: "2300", img: "8.jpg" 
            },
            { 
                name: { ru: "Какао", kk: "Какао", en: "Cocoa", ko: "코코아" }, 
                desc: { 
                    ru: "Согревающий напиток с насыщенным вкусом какао-бобов и нежной молочной пенкой. 0.3мл", 
                    kk: "Какао бұршақтарының қанық дәмі мен нәзік сүт көбігі бар жылытатын сусын. 0.3мл", 
                    en: "Warming drink with a rich cocoa bean flavor and gentle milk foam. 0.3ml", 
                    ko: "진한 초콜릿의 풍미와 부드러운 우유 거품이 가득한 달콤한 코코아. 0.3밀리리터" 
                }, 
                price: "1300", img: "8.jpg" 
            }
        ]
    },
    {
        id: "frappe",
        category: {
            ru: "Фраппе",
            kk: "Фраппе",
            en: "Frappe",
            ko: "프라페"
        },
        items: [
            { 
                name: { ru: "Аффогато", kk: "Аффогато", en: "Affogato", ko: "아포가토" }, 
                desc: { 
                    ru: "Изысканный дуэт горячего эспрессо и шарика нежного ванильного мороженого.", 
                    kk: "Ыстық эспрессо мен ванильді балмұздақтың талғампаз дуэті.", 
                    en: "Exquisite duo of hot espresso and a scoop of gentle vanilla ice cream.", 
                    ko: "진한 에스프레소와 부드러운 바닐라 아이스크림의 환상적인 만남." 
                }, 
                price: "1400", img: "35.jpg" 
            },
            { 
                name: { ru: "Фраппе", kk: "Фраппе", en: "Frappe", ko: "프라페" }, 
                desc: { 
                    ru: "Густой ледяной микс с пышной пеной и насыщенным кофейным вкусом.", 
                    kk: "Қою мұздай микс, үлпілдек көбік және қанық кофе дәмі.", 
                    en: "Thick ice mix with lush foam and rich coffee flavor.", 
                    ko: "풍부한 거품과 진한 커피 향이 어우러진 시원한 프라페." 
                }, 
                price: "2300", img: "8.jpg" 
            },
            { 
                name: { ru: "Какао фраппе", kk: "Какао фраппе", en: "Cocoa Frappe", ko: "코코아 프라페" }, 
                desc: { 
                    ru: "Густой взбитый напиток с насыщенным вкусом какао и ледяной свежестью. 0.4мл", 
                    kk: "Какаоның қанық дәмі мен мұздай сергітетін қою сусын. 0.4мл", 
                    en: "Thick whipped drink with rich cocoa flavor and icy freshness. 0.4ml", 
                    ko: "진한 코코아의 풍미를 시원하게 즐기는 초코 프라페. 0.4밀리리터" 
                }, 
                price: "2300", img: "40.jpg" 
            },
            { 
                name: { ru: "Эспрессо Фраппе", kk: "Эспрессо Фраппе", en: "Espresso Frappe", ko: "에스프레소 프라페" }, 
                desc: { 
                    ru: "Бодрящий ледяной коктейль на основе двойного эспрессо с густой пеной. 0.4мл", 
                    kk: "Қою көбігі бар қос эспрессо негізіндегі сергітетін мұздай коктейль. 0.4мл", 
                    en: "Invigorating ice cocktail based on double espresso with thick foam. 0.4ml", 
                    ko: "더블 에스프레소의 진한 맛을 담은 시원한 커피 프라페. 0.4밀리리터" 
                }, 
                price: "2300", img: "26.jpg" 
            },
            { 
                name: { ru: "Айс карамельный макиато", kk: "Айс карамельді макиато", en: "Iced Caramel Macchiato", ko: "아이스 카라멜 마키아토" }, 
                desc: { 
                    ru: "Эффектный контраст холодного молока, ванильного сиропа и крепкого эспрессо. 0.4мл", 
                    kk: "Суық сүт, ваниль шәрбаты және қою эспрессоның әсерлі контрасты. 0.4мл", 
                    en: "Stunning contrast of cold milk, vanilla syrup, and strong espresso. 0.4ml", 
                    ko: "달콤한 카라멜과 부드러운 우유, 에스프레소의 완벽한 조화. 0.4밀리리터" 
                }, 
                price: "2300", img: "8.jpg" 
            }
        ]
    },
 {
        id: "milkshakes",
        category: {
            ru: "Молочные коктейли",
            kk: "Сүт коктейльдері",
            en: "Milkshakes",
            ko: "밀크쉐이크"
        },
        items: [
            { 
                name: { ru: "Орео", kk: "Орео", en: "Oreo Shake", ko: "오레오 쉐이크" }, 
                desc: { 
                    ru: "Густой милкшейк с кусочками легендарного печенья и сливочной нежностью. 0.45мл", 
                    kk: "Аңызға айналған печенье кесектері бар қою әрі нәзік сүт коктейлі. 0.45мл", 
                    en: "Thick milkshake with pieces of the legendary cookie and creamy goodness. 0.45ml", 
                    ko: "오레오 쿠키가 씹히는 달콤하고 진한 프리미엄 쉐이크. 0.45밀리리터" 
                }, 
                price: "2100тг", img: "1.jpg" 
            },
            { 
                name: { ru: "Клубничный", kk: "Құлпынай", en: "Strawberry Shake", ko: "딸기 쉐이크" }, 
                desc: { 
                    ru: "Густой молочный напиток со вкусом спелой клубники и нежной текстурой. 0.45мл", 
                    kk: "Піскен құлпынай дәмі бар қою және нәзік сүт коктейлі. 0.45мл", 
                    en: "Thick dairy drink with ripe strawberry flavor and smooth texture. 0.45ml", 
                    ko: "잘 익은 딸기 맛과 부드러운 식감의 클래식 쉐이크. 0.45밀리리터" 
                }, 
                price: "1700тг", img: "57.jpg" 
            },
            { 
                name: { ru: "Ванильный", kk: "Ванильді", en: "Vanilla Shake", ko: "바닐라 쉐이크" }, 
                desc: { 
                    ru: "Классический вкус натуральной ванили и нежного мороженого. 0.45мл", 
                    kk: "Нағыз ваниль мен нәзік балмұздақтың классикалық дәмі. 0.45мл", 
                    en: "Classic taste of natural vanilla and gentle ice cream. 0.45ml", 
                    ko: "천연 바닐라 향과 부드러운 아이스크림의 달콤한 만남. 0.45밀리리터" 
                }, 
                price: "1700тг", img: "64.jpg" 
            },
            { 
                name: { ru: "Банановый", kk: "Бананды", en: "Banana Shake", ko: "바나나 쉐이크" }, 
                desc: { 
                    ru: "Питательный коктейль с нежной текстурой спелого банана. 0.45мл", 
                    kk: "Піскен бананның нәзік құрылымы бар құнарлы коктейль. 0.45мл", 
                    en: "Nutritious shake with the smooth texture of ripe banana. 0.45ml", 
                    ko: "잘 익은 바나나의 영양과 부드러움을 담은 쉐이크. 0.45밀리리터" 
                }, 
                price: "1700тг", img: "55.jpg" 
            },
            { 
                name: { ru: "Шоколадный", kk: "Шоколадты", en: "Chocolate Shake", ko: "초코 쉐이크" }, 
                desc: { 
                    ru: "Глубокий вкус какао и нежная сливочная текстура мороженого. 0.45мл", 
                    kk: "Какаоның қанық дәмі мен балмұздақтың нәзік кілегейлі құрылымы. 0.45мл", 
                    en: "Deep cocoa flavor and gentle creamy ice cream texture. 0.45ml", 
                    ko: "진한 초콜릿과 부드러운 우유가 어우러진 달콤한 유혹. 0.45밀리리터" 
                }, 
                price: "1700тг", img: "59.jpg" 
            }
        ]
    },
    {
        id: "smoothies",
        category: {
            ru: "Смузи",
            kk: "Смузи",
            en: "Smoothies",
            ko: "스무디"
        },
        items: [
            { 
                name: { ru: "Розовый пеликан", kk: "Қызғылт пеликан", en: "Pink Pelican", ko: "핑크 펠리컨" }, 
                desc: { 
                    ru: "Освежающий микс из гренадина, лимонного и апельсинового соков, взбитый до легкой пены. 0.4мл", 
                    kk: "Гренадин, лимон және апельсин шырындарынан жасалған, жеңіл көбікке дейін шайқалған сергітетін микс. 0.4мл", 
                    en: "Refreshing mix of grenadine, lemon, and orange juices, whipped to a light foam. 0.4ml", 
                    ko: "그레나딘, 레몬, 오렌지 주스가 어우러진 가볍고 상큼한 거품 음료. 0.4밀리리터" 
                }, 
                price: "2100", img: "8.jpg" 
            },
            { 
                name: { ru: "Ягодный смузи", kk: "Жидек смузиі", en: "Berry Smoothie", ko: "베리 스무디" }, 
                desc: { 
                    ru: "Густой микс из лесных ягод, который дарит мощный прилив энергии и природную пользу. 0.4мл", 
                    kk: "Қуат пен табиғи пайда беретін орман жидектерінің қою қоспасы. 0.4мл", 
                    en: "Thick mix of forest berries that gives a powerful boost of energy and natural benefits. 0.4ml", 
                    ko: "천연 비타민이 가득한 숲속 베리의 진한 맛과 활력을 담은 스무디. 0.4밀리리터" 
                }, 
                price: "2200", img: "8.jpg" 
            },
            { 
                name: { ru: "Клубничный смузи", kk: "Құлпынай смузиі", en: "Strawberry Smoothie", ko: "딸기 스무디" }, 
                desc: { 
                    ru: "Густой напиток из спелой клубники, сохранивший всю пользу и натуральный вкус свежих ягод. 0.4мл", 
                    kk: "Жас жидектердің барлық пайдасы мен табиғи дәмін сақтаған піскен құлпынайдан жасалған қою сусын. 0.4мл", 
                    en: "Thick drink made from ripe strawberries, preserving all the benefits and natural flavor of fresh berries. 0.4ml", 
                    ko: "잘 익은 딸기의 영양과 신선한 맛을 그대로 살린 진한 딸기 스무디. 0.4밀리리터" 
                }, 
                price: "2200", img: "51.jpg" 
            },
            { 
                name: { ru: "Киви смузи", kk: "Киви смузиі", en: "Kiwi Smoothie", ko: "키위 스무디" }, 
                desc: { 
                    ru: "Освежающий микс с приятной кислинкой и высоким содержанием витамина С. 0.4мл", 
                    kk: "Жағымды қышқылдығы бар және С дәруменіне бай сергітетін микс. 0.4мл", 
                    en: "Refreshing mix with a pleasant sourness and high vitamin C content. 0.4ml", 
                    ko: "상큼한 맛과 비타민 C가 가득한 시원한 키위 스무디. 0.4밀리리터" 
                }, 
                price: "2200", img: "52.jpg" 
            }
        ]
    },
{
        id: "lemonades",
        category: {
            ru: "Лимонады 0.4л",
            kk: "Лимонадтар 0.4л",
            en: "Lemonades 0.4L",
            ko: "에이드 0.4L"
        },
        items: [
            { 
                name: { ru: "Грейпфрут", kk: "Грейпфрут", en: "Grapefruit", ko: "자몽 에이드" }, 
                desc: { 
                    ru: "Освежающий напиток с характерной горчинкой грейпфрута и бодрящими пузырьками. 0.4мл", 
                    kk: "Грейпфрутқа тән ащылығы мен сергітетін көпіршіктері бар сусын. 0.4мл", 
                    en: "Refreshing drink with characteristic grapefruit bitterness and invigorating bubbles. 0.4ml ", 
                    ko: "자몽 특유의 쌉쌀함과 청량한 탄산이 어우러진 시원한 에이드. 0.4м밀리리터" 
                }, 
                price: "1600тг", img: "37.jpg" 
            },
            { 
                name: { ru: "Лимон", kk: "Лимон", en: "Lemon", ko: "레몬 에이드" }, 
                desc: { 
                    ru: "Бодрящий микс из свежевыжатого сока и газированной воды, который идеально утоляет жажду. 0.4мл ", 
                    kk: "Шөлді қандыратын жас сығылған шырын мен газдалған судың сергітетін қоспасы. 0.4мл", 
                    en: "Invigorating mix of freshly squeezed juice and sparkling water that perfectly quenches thirst. 0.4ml", 
                    ko: "갓 짠 레몬즙과 탄산수가 만나 갈증을 해소해주는 깔끔한 에이드. 0.4밀리리터" 
                }, 
                price: "1600тг", img: "38.jpg" 
            },
            { 
                name: { ru: "Сангрия", kk: "Сангрия", en: "Sangria", ko: "샹그리아" }, 
                desc: { 
                    ru: "Насыщенный микс на основе темного виноградного сока с пряными нотками и фруктами. 0.4мл", 
                    kk: "Дәмдеуіштер мен жемістер қосылған қара жүзім шырыны негізіндегі қанық микс. 0.4мл", 
                    en: "Rich mix based on dark grape juice with spicy notes and fresh fruits. 0.4ml", 
                    ko: "진한 포도 주스와 상큼한 과일, 향긋한 풍미가 가득한 무알콜 샹그리아. 0.4밀리리터" 
                }, 
                price: "1600тг", img: "42.jpg" 
            },
            { 
                name: { ru: "Манго-Маракуйя", kk: "Манго-Маракуйя", en: "Mango-Passion Fruit", ko: "망고 패션후르츠 에이드" }, 
                desc: { 
                    ru: "Экзотическое сочетание сладкого манго и дерзкой кислинки спелой маракуйи. 0.4мл", 
                    kk: "Тәтті манго мен піскен маракуйяның экзотикалық үйлесімі. 0.4мл", 
                    en: "Exotic combination of sweet mango and the bold tartness of ripe passion fruit. 0.4ml ", 
                    ko: "달콤한 망고와 상큼한 패션후르츠가 만난 이국적인 맛. 0.4밀리리터" 
                }, 
                price: "1700тг", img: "45.jpg" 
            },
            { 
                name: { ru: "Ягодный", kk: "Жидек", en: "Berry", ko: "베리 에이드" }, 
                desc: { 
                    ru: "Насыщенный напиток, вобравший в себя всю сладость спелых садовых ягод. 0.4мл", 
                    kk: "Піскен бақша жидектерінің барлық тәттілігін жинаған қанық сусын. 0.4мл", 
                    en: "Rich drink that has absorbed all the sweetness of ripe garden berries. 0.4ml", 
                    ko: "잘 익은 정원 베리의 달콤함을 가득 담은 진한 에이드. 0.4밀리리터" 
                }, 
                price: "1600тг", img: "68.jpg" 
            },
            { 
                name: { ru: "Персиковый айс ти", kk: "Шалфей айс ти", en: "Peach Ice Tea", ko: "복숭아 아이스티" }, 
                desc: { 
                    ru: "Классический прохладный чай с сочной сладостью спелого персика. 0.4", 
                    kk: "Піскен шабдалының шырынды тәттілігі бар классикалық салқын шай.", 
                    en: "Classic cool tea with the juicy sweetness of a ripe peach.", 
                    ko: "달콤한 복숭아 향이 가득한 시원한 클래식 아이스티." 
                }, 
                price: "1700тг", img: "8.jpg" 
            }
        ]
    },
    {
        id: "lemonades-1l",
        category: {
            ru: "Лимонады 1л",
            kk: "Лимонадтар 1л",
            en: "Lemonades 1L",
            ko: "에이드 1L"
        },
        items: [
            { 
                name: { ru: "Грейпфрут 1л", kk: "Грейпфрут 1л", en: "Grapefruit 1L", ko: "자몽 에이드 1L" }, 
                desc: { 
                    ru: "Семейный формат с яркой горчинкой грейпфрута и обилием льда.", 
                    kk: "Грейпфруттың ащылығы мен мұзы көп отбасылық формат.", 
                    en: "Family format with bright grapefruit bitterness and plenty of ice.", 
                    ko: "쌉쌀한 자몽의 맛을 시원하게 즐기는 대용량 에이드." 
                }, 
                price: "3200тг", img: "50.jpg" 
            },
            { 
                name: { ru: "Лимон 1л", kk: "Лимон 1л", en: "Lemon 1L", ko: "레몬 에이드 1L" }, 
                desc: { 
                    ru: "Большая порция эталонного лимонада с яркой кислинкой для всей компании.", 
                    kk: "Бүкіл компанияға арналған жарқын қышқылдығы бар лимонадтың үлкен порциясы.", 
                    en: "Large portion of reference-quality lemonade with bright tartness for the whole group.", 
                    ko: "상큼한 레몬의 풍미를 온 가족이 함께 즐길 수 있는 대용량 에이드." 
                }, 
                price: "3200тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Ягодный 1л", kk: "Жидек 1л", en: "Berry 1L", ko: "베리 에이드 1L" }, 
                desc: { 
                    ru: "Целый литр насыщенного микса из лесных ягод и содовой.", 
                    kk: "Орман жидектері мен соданың қанық қоспасының толық литрі.", 
                    en: "A whole liter of rich forest berry mix and soda.", 
                    ko: "진한 숲속 베리와 톡 쏘는 탄산이 어우러진 1리터 에이드." 
                }, 
                price: "3200тг", img: "8.jpg" 
            }
        ]
    },
    {
        id: "fruit-tea",
        category: { ru: "Фруктовые чаи", kk: "Жеміс шайлары", en: "Fruit Teas", ko: "과일차" },
        items: [
            { 
                name: { ru: "Грейпфрутовый чай", kk: "Грейпфрут шайы", en: "Grapefruit Tea", ko: "자몽차" }, 
                desc: { 
                    ru: "Согревающий настой с благородной горчинкой грейпфрута. 0.3мл", 
                    kk: "Грейпфруттың ащылығы бар жылытатын шай. 0.3мл", 
                    en: "Warming infusion with grapefruit bitterness. 0.3ml", 
                    ko: "자몽의 쌉쌀함이 담긴 따뜻한 차. 0.3밀리리터" }, 
                price: "1200тг", img: "65.jpg" 
            },
            { 
                name: { 
                    ru: "Облепиховый чай", 
                    kk: "Шырғанақ шайы", 
                    en: "Sea Buckthorn Tea",
                    ko: "비타민 나무 차" }, 
                desc: { 
                    ru: "Целебный напиток с ярким вкусом спелой облепихи. 0.3мл", 
                    kk: "Піскен шырғанақтың жарқын дәмі бар емдік сусын. 0.3мл", 
                    en: "Healing drink with ripe sea buckthorn flavor. 0.3ml", 
                    ko: "잘 익은 비타민 나무 열매의 상큼한 맛. 0.3밀리리터" }, 
                price: "1200тг", img: "69.jpg" 
            },
            { 
                name: { 
                    ru: "Манго-Маракуйя", 
                    kk: "Манго-Маракуйя", 
                    en: "Mango-Passion Fruit", 
                    ko: "망고 패션후르츠 차" }, 
                desc: { 
                    ru: "Согревающий настой с тропическим ароматом. 0.3мл", 
                    kk: "Тропикалық хош иісі бар жылытатын шай. 0.3мл", 
                    en: "Warming infusion with tropical aroma. 0.3ml", 
                    ko: "열대 과일 향이 가득한 따뜻한 차. 0.3밀리리터" }, 
                price: "1200тг", img: "8.jpg" 
            }
        ]
    },
    {
        id: "fruit-tea-pot",
        category: {
            ru: "Фруктовые чайники",
            kk: "Жеміс шәйнектері",
            en: "Fruit Tea Pots",
            ko: "과일 티 팟"
        },
        items: [
            { 
                name: { ru: "Ягодный чайник", kk: "Жидек шәйнегі", en: "Berry Tea Pot", ko: "베리 티 팟" }, 
                desc: { 
                    ru: "Насыщенный согревающий настой из цельных лесных ягод. 0.75мл", 
                    kk: "Тұтас орман жидектерінен жасалған қанық жылытатын тұнба. 0.75мл", 
                    en: "Rich warming infusion of whole forest berries. 0.75ml", 
                    ko: "숲속 베리가 듬뿍 들어간 진하고 따뜻한 차. 0.75밀리리터" 
                }, 
                price: "2200тг", img: "2.jpg" 
            },
            { 
                name: { ru: "Лимонный чайник", kk: "Лимон шәйнегі", en: "Lemon Tea Pot", ko: "레몬 티 팟" }, 
                desc: { 
                    ru: "Большой объем согревающего чая с обилием свежего лимона. 0.75мл", 
                    kk: "Жас лимон қосылған жылытатын шайдың үлкен көлемі. 0.75мл", 
                    en: "Large serving of warming tea with plenty of fresh lemon. 0.75ml", 
                    ko: "신선한 레몬이 가득 들어간 대용량 비타민 차. 0.75밀리리터" 
                }, 
                price: "2200тг", img: "62.jpg" 
            },
            { 
                name: { ru: "Манго-Маракуйя чайник", kk: "Манго-Маракуйя шәйнегі", en: "Mango-Passion Fruit Pot", ko: "망고 패션후르츠 티 팟" }, 
                desc: { 
                    ru: "Экзотическое тепло с густым ароматом спелого манго. 0.75мл", 
                    kk: "Піскен мангоның қою хош иісі бар экзотикалық жылу. 0.75мл", 
                    en: "Exotic warmth with a dense aroma of ripe mango. 0.75ml", 
                    ko: "달콤한 망고 향이 가득한 열대 과일 티 팟. 0.75밀리리터" 
                }, 
                price: "2200тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Облепиховый чайник", kk: "Шырғанақ шәйнегі", en: "Sea Buckthorn Pot", ko: "비타민 나무 티 팟" }, 
                desc: { 
                    ru: "Густой витаминный напиток с мягким согревающим эффектом. 0.75мл", 
                    kk: "Жұмсақ жылыту әсері бар қою дәруменді сусын. 0.75мл", 
                    en: "Thick vitamin drink with a gentle warming effect. 0.75ml", 
                    ko: "비타민이 풍부하고 몸을 따뜻하게 해주는 건강차. 0.75밀리리터" 
                }, 
                price: "2200тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Грейпфрутовый чайник", kk: "Грейпфрут шәйнегі", en: "Grapefruit Tea Pot", ko: "자몽 티 팟" }, 
                desc: { 
                    ru: "Согревающий настой с благородной горчинкой грейпфрута. 0.75мл", 
                    kk: "Грейпфруттың ащылығы бар жылытатын тұнба. 0.75мл", 
                    en: "Warming infusion with noble grapefruit bitterness. 0.75ml", 
                    ko: "자몽 특유의 쌉쌀함이 느껴지는 고급스러운 맛. 0.75밀리리터" 
                }, 
                price: "2200тг", img: "66.jpg" 
            }
        ]
    },
    {
        id: "leaf-tea",
        category: {
            ru: "Листовые чаи",
            kk: "Жапырақ шайлары",
            en: "Leaf Teas",
            ko: "잎차"
        },
        items: [
            { 
                name: { ru: "Барбарисовый чайник", kk: "Бөріқарақат шәйнегі", en: "Barberry Tea Pot", ko: "바르베리 티 팟" }, 
                desc: { 
                    ru: "Нежный фруктовый настой с легкой сладостью. 0.8мл", 
                    kk: "Жеңіл тәттілігі бар нәзік жеміс тұнбасы. 0.8мл", 
                    en: "Gentle fruit infusion with a light sweetness. 0.8ml", 
                    ko: "은은한 단맛과 산뜻한 향의 과일차. 0.8밀리리터" }, 
                price: "1900тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Молочный Улун", kk: "Сүтті Улун", en: "Milk Oolong", ko: "밀크 우롱" }, 
                desc: { 
                    ru: "Знаменитый чай с нежным молочно-кремовым ароматом. 0.8мл", 
                    kk: "Нәзік сүтті-кремді хош иісі бар танымал шай. 0.8мл", 
                    en: "Famous tea with a gentle milk-cream aroma. 0.8ml", 
                    ko: "부드러운 우유 향이 매력적인 우롱차. 0.8밀리리터"  }, 
                price: "1900тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Зеленый с жасмином", kk: "Жасмин қосылған жасыл", en: "Green with Jasmine", ko: "자스민 녹차" }, 
                desc: { 
                    ru: "Изысканный чай с ароматом цветков жасмина. 0.8мл", 
                    kk: "Жасмин гүлдерінің хош иісі бар талғампаз шай. 0.8мл", 
                    en: "Exquisite tea with jasmine flower aroma. 0.8ml", 
                    ko: "향긋한 자스민 향이 일품인 녹차. 0.8밀리리터" }, 
                price: "1900тг", img: "8.jpg" 
            }
        ]
    },
    {
        id: "leaf-tea",
        category: { ru: "Листовые чаи", kk: "Жапырақ шайлары", en: "Leaf Teas", ko: "잎차" },
        items: [
            { 
                name: { ru: "Молочный Улун", kk: "Сүтті Улун", en: "Milk Oolong", ko: "밀크 우롱" }, 
                desc: { 
                    ru: "Знаменитый чай с нежным молочно-кремовым ароматом. 0.8мл", 
                    kk: "Нәзік сүтті-кремді хош иісі бар танымал шай. 0.8мл", 
                    en: "Famous tea with a gentle milk-cream aroma. 0.8ml", 
                    ko: "부드러운 우유 향이 매력적인 우롱차. 0.8밀리리터" }, 
                price: "1900тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Зеленый с жасмином", kk: "Жасмин қосылған жасыл", en: "Green with Jasmine", ko: "자스민 녹차" }, 
                desc: { 
                    ru: "Изысканный светлый чай с ароматом цветков жасмина. 0.8лм", 
                    kk: "Жасмин гүлдерінің хош иісі бар талғампаз ақшыл шай. 0.8мл", 
                    en: "Exquisite light tea with jasmine flower aroma. 0.8ml", 
                    ko: "은은한 자스민 향이 일품인 녹차. 0.8밀리리터" }, 
                price: "1900тг", img: "8.jpg" 
            },
            { 
                name: { ru: "Каркаде", kk: "Каркаде", en: "Hibiscus", ko: "히비스커스" }, 
                desc: { 
                    ru: "Насыщенный напиток из лепестков розы с кислинкой. 0.8мл", 
                    kk: "Қышқылдығы бар раушан жапырақтарынан жасалған қою сусын. 0.8мл", 
                    en: "Rich drink from rose petals with a tart flavor. 0.8ml", 
                    ko: "새콤한 맛과 붉은 빛이 특징인 히비스커스 차. 0.8밀리리터" }, 
                price: "1900тг", img: "8.jpg" 
            }
        ]
    }
];
let currentLang = localStorage.getItem('selectedLang') || 'ru';
function renderBar(lang) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    let html = '';
    barData.forEach(section => {
        html += `
            <section id="${section.id}" class="menu-section">
                <h2 class="category-title">${section.category[lang]}</h2>
                <div class="menu-grid">
                    ${section.items.map((item, index) => `
                        <div class="item-card" onclick="openModal('${section.id}', ${index})">
                            <img src="${item.img}" loading="lazy">
                            <div class="item-info">
                                <h3>${item.name[lang]}</h3>
                                <p class="price">${item.price}</p>
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
    const section = barData.find(s => s.id === sectionId);
    if (!section) return;
    const item = section.items[index];
    const modal = document.getElementById('item-modal');
    
    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-name').innerText = item.name[currentLang];
    document.getElementById('modal-desc').innerText = item.desc[currentLang];
    document.getElementById('modal-price').innerText = item.price;
    
    modal.style.display = "flex";
}
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    renderBar(lang);
}
document.addEventListener('DOMContentLoaded', () => {
    renderBar(currentLang);
    
    const closeBtn = document.querySelector('.close-button');
    if (closeBtn) {
        closeBtn.onclick = () => {
            document.getElementById('item-modal').style.display = "none";
        };
    }

    window.onclick = (event) => {
        const modal = document.getElementById('item-modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});