import React from "react";
import { 
  View, Text, StyleSheet, Image, ScrollView, TouchableOpacity 
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>แนะนำอาชีพ</Text>

      {/* ScrollView สำหรับเลื่อนภาพในแนวนอน */}
      <ScrollView horizontal contentContainerStyle={styles.imageRow}>
        <Image source={require("../../image/3DDesigneror3DArtist.jpg")} style={styles.smallImage} />

        <Image source={require("../../image/Actuary.jpg")} style={styles.smallImage} />
        <Image source={require("../../image/forensicPathologist.png")} style={styles.smallImage} />
        <Image source={require("../../image/Physiotherapist.webp")} style={styles.smallImage} />
        <Image source={require("../../image/DataScientist.png")} style={styles.smallImage} />
        <Image source={require("../../image/physician.jpg")} style={styles.smallImage} />


      </ScrollView>

      <ScrollView>

        <TouchableOpacity 
          style={styles.item}
          onPress={() =>
            navigation.navigate('details', {
              itemName: 'นักออกแบบสามมิติ',
              itemName1: '3D Designer or\n 3D Artist',
              synopsis: 'ศิลปินนักออกแบบสามมิติ คือ ผู้ที่มีความสามารถในการออกแบบผ่านโปรแกรมคอมพิวเตอร์ เพื่อสร้างสรรค์ จำลอง สิ่งต่าง ๆ ให้มีมิติขึ้นมาได้ไม่ว่าจะเป็นอาคารบ้านเรือน โครงสร้างอวัยวะของมนุษย์ สิ่งมีชีวิตที่สูญพันธ์ไปแล้วอย่างไดโนเสาร์ หรือแม้กระทั่งตัวละครแอนนิเมชั่นต่าง ๆ โดยพวกเขาต้องอาศัย พื้นฐานความเข้าใจในองค์ประกอบศิลป์ มิติ มุมมองต่าง ๆ รูปร่างรูปทรง พื้นผิวสัมผัส สีสัน แสงเงา ทุกอย่างล้วนเป็นสิ่งที่ต้องรู้และเข้าใจ สามารถเห็นภาพในหัวได้ จากนั้นจึงใช้โปรแกรมเป็นเครื่องมือในการสร้างสรรค์ภาพในหัวให้ออกมาเป็นชิ้นงานจริง',
              skill: 'ทักษะการคิดวิเคราะห์\n- ทักษะการวางแผน\n- ทักษะด้านภาษา\n- ทักษะการใช้โปรแกรม\n- ความเข้าใจในงานศิลปะและมิติสัมพันธ์\n                  ',
              
              feature: 'มีความคิดสร้างสรรค์\n- ช่างสังเกต รักการเรียนรู้\n- มีวินัย อดทน\n- ละเอียดรอบคอบ\n- มีความรับผิดชอบ                                                                                ',
              image: require('../../image/3DDesigneror3DArtist.jpg'),
              image2: require('../../image/feature.png'),
              image3: require('../../image/skill.png'),

            })
          }
        >
          <Image source={require("../../image/3DDesigneror3DArtist.jpg")} style={styles.icon} />
          <Text style={styles.itemText}>นักออกแบบสามมิติ</Text>
        </TouchableOpacity>

        

        


        {/* Actuary คณิตศาสตร์ประกันภัย */}
        <TouchableOpacity
                  style={styles.item}
                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'คณิตศาสตร์\nประกันภัย',
                    itemName1: 'Actuary',
                    synopsis: 'หลายคนอาจเข้าใจว่า นักคณิตศาสตร์ประกันภัย คือผู้ที่ใช้คณิตศาสตร์และทำงานในองค์การด้านประกันภัย แต่แท้จริงแล้ว นักคณิตศาสตร์ประกันภัย คือนักวิเคราะห์ความเสี่ยงทางธุรกิจในองค์กรทั่วไป โดยใช้ทักษะทางด้านสถิติและคณิตศาสตร์การเงิน เพื่อประเมินผลกระทบ ความไม่แน่นอนต่าง ๆ ในปัจจุบันหรือที่อาจเกิดขึ้นได้ในอนาคต โดยพวกเขาต้องสร้างแบบจำลอง (Models) เพื่อคาดการณ์ปัจจัยที่อาจเกิดขึ้นทางธุรกิจในอนาคตได้ โดยอาศัยการวิเคราะห์ข้อมูลจากอดีตที่ผ่านมา',
                    skill: 'ทักษะการคิดวิเคราะห์\n- ความเข้าใจในสถิติ\n- ความสามารถในการวิเคราะห์ข้อมูลทางการเงิน ',

                    feature: 'ทักษะการคิดวิเคราะห์\n- ละเอียดรอบคอบ\n- มีวินัย อดทน',
                    image: require('../../image/Actuary.jpg'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                 <Image source={require("../../image/Actuary.jpg")} style={styles.icon} />
                 <Text style={styles.itemText}>คณิตศาสตร์ประกันภัย</Text>
              </TouchableOpacity>
        
        
        {/* Anesthesiologist วิสัญญีเเพทย์ */}
        <TouchableOpacity 
          style={styles.item}
          onPress={() =>
            navigation.navigate('details', {
              itemName: 'วิสัญญีเเพทย์',
              itemName1: 'Anesthesiologist',
              synopsis: 'วิสัญญีแพทย์ คือแพทย์ที่มีความเชี่ยวชาญเป็นพิเศษในด้านการให้ยาชาและยาสลบ หรือที่มักเรียกติดปากกันว่าหมอดมยา หน้าที่หลักของวิสัญญีแพทย์คือการดูแลผู้ป่วยในห้องผ่าตัดให้ได้รับความปลอดภัยและความสะดวกสบายมากที่สุดทั้งในระหว่างผ่าตัดและหลังการผ่าตัด โดยการช่วยระงับความเจ็บปวด ด้วยวิธีการให้ยาแบบต่าง ๆ ทั้งยาชาเฉพาะจุด ที่ช่วยทำให้ไม่รู้สึกเจ็บปวด หรือยาสลบ ที่ทำให้หลับหรือหมดสติไปเลยและผ่านพ้นการผ่าตัดไปได้ด้วยดี รวมถึงคอยติดตามดูอาการในช่วงพักฟื้น',
              skill: 'ทักษะวิชาชีพของวิสัญญีแพทย์\n- ทักษะการรับมือแก้ไขปัญหาเฉพาะหน้า\n- มีความละเอียดรอบคอบสูง\n- ทักษะทางวิทยาศาสตร์\n- ทักษะด้านการสื่อสาร\n                               ',
              
              feature: 'มีความสนใจหรือความชอบในอาชีพ\n  มีคุณธรรม จริยธรรม และจรรยาบรรณ\n- เป็นคนละเอียดรอบคอบ\n- คิดไวทำไว มีทักษะการใช้มือ\n- รับแรงกดดันในการทำงานได้\n                       ',
              image: require('../../image/Anesthesiologistr.jpg'),
              image2: require('../../image/feature.png'),
              image3: require('../../image/skill.png'),

            })
          }
        >
          <Image source={require("../../image/Anesthesiologistr.jpg")} style={styles.icon} />
          <Text style={styles.itemText}>วิสัญญีเเพทย์</Text>
        </TouchableOpacity>

        {/* Architect สถาปนิก */}
        <TouchableOpacity 
          style={styles.item}
          onPress={() =>
            navigation.navigate('details', {
              itemName: 'สถาปนิก',
              itemName1: 'Architect',
              synopsis: ' สถาปัตยกรรมหรือตึกรามบ้านช่อง อาคารต่าง ๆ จะเกิดขึ้นไม่ได้ หากไม่มีผู้ออกแบบสร้างสรรค์และวางแผนก่อสร้างเหล่านั้น ที่เราเรียกกันว่า “สถาปนิก ซึ่งผู้คนทุกคนล้วนต้องการที่อยู่อาศัย สถานที่ทำงาน แหล่งเรียนรู้ แหล่งช้อปปิ้ง กินเที่ยว สถาปนิกมีหน้าที่ออกแบบ เพื่อเนรมิตพื้นที่ไม่ว่าจะเป็นในหรือนอกอาคาร ไม่ว่าจะขนาดเล็กๆ เพียงห้องเดียวหรือไปจนถึงอาคารขนาดใหญ่โตที่มีโครงสร้างสลับซับซ้อน',
              skill: 'ทักษะการคิดวิเคราะห์\n- ทักษะด้านทัศนศิลป์\n- ทักษะการสื่อสาร\n- ทักษะการจัดการ\n- ทักษะความเชี่ยวชาญเฉพาะทาง\n- ทักษะการมองเห็น\n ',
              
              feature: 'มีความละเอียดรอบคอบ\n- มีความคิดริเริ่มสร้างสรรค์\n- หมั่นศึกษาหาความรู้ในวิชาชีพ\n- ทำงานภายใต้ความกดดันได้ดี\n- มีความรับผิดชอบสูง\n- ซื่อสัตย์และมีจรรยาบรรณ',
              image: require('../../image/Architect.jpg'),
              image2: require('../../image/feature.png'),
              image3: require('../../image/skill.png'),

            })
          }
        >
          <Image source={require("../../image/Architect.jpg")} style={styles.icon} />
          <Text style={styles.itemText}>สถาปนิก</Text>
        </TouchableOpacity>


        {/* Architectural Lighting Designer นักออกแบบแสงสถาปัตยกรรม */}
        <TouchableOpacity
        style={styles.item}
                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'นักออกแบบแสง\nสถาปัตยกรรม',
                    itemName1: 'ArchitecturalLighting \nDesigner',
                    synopsis: 'ความเชี่ยวชาญในการออกแบบแสงสำหรับสถาปัตยกรรม \n- ความรู้ในเทคโนโลยีการจัดแสง (เช่น LED, แสงธรรมชาติ)',
                    skill: 'ความเข้าใจด้านแสงและฟิสิกส์ของแสง\n- ความรู้ด้านสถาปัตยกรรม\n- ทักษะด้านซอฟต์แวร์การออกแบบแสง\n- ความคิดสร้างสรรค์และ\n  ศิลปะในการออกแบบแสง\n                      ',

                    feature: 'ความเข้าใจด้านแสงธรรมชาติ\n  และแสงเทียม',
                    image: require('../../image/ArchitecturalLightingDesigner.jpg'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/ArchitecturalLightingDesigner.jpg")} style={styles.icon} />
                <Text style={styles.itemText}>นักออกแบบแสงสถาปัตยกรรม</Text>
         </TouchableOpacity>


        



        {/* Children’s Storyteller อายุรเเพทย์*/}
        <TouchableOpacity
         style={styles.item}
                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'อายุรเเพทย์',
                    itemName1: 'physician',
                    synopsis: 'อายุรแพทย์  (Internal Medicine) คือแพทย์ที่ทำการวินิจฉัย โดยใช้ความรู้ทางการแพทย์และการสังเกตอย่างละเอียด เพื่อค้นหาสาเหตุของโรค รักษา และป้องกันโรคภัยหรือความผิดปกตของระบบในร่างกาย รวมทั้งให้คำแนะนำในการปฏิบัติตัวของคนไข้ และให้ยารักษาตามความจำเป็น อายุรแพทย์อาจมีความพิเศษเฉพาะทางสาขาวิชาใดวิชาหนึ่ง เช่น โรคหัวใจและหลอดเลือด โรคเกี่ยวกับระบบทางเดินหายใจ ทางเดินอาหาร โรคไต เป็นต้น',
                    skill: '-ทักษะการสื่อสาร \n-ทักษะการแก้ปัญหา \n- ทักษะด้านการจัดการ \n- ทักษะความเป็นผู้นำ \n- ทักษะการคิดวิเคราะห์\n                                ',

                    feature: 'อดทนและเสียสละ\n- ช่างสังเกตและใส่ใจรายละเอียด\n- ร่างกายและจิตใจแข็งแรงสมบูรณ์\n- ความเห็นอกเห็นใจผู้อื่น\n- มีความสนใจทางวิทยาศาสตร์และร่างกายมนุษย์\n- ขยัน เรียนเก่งและ พัฒนาตัวเองอยู่เสมอ\n- มีความรับผิดชอบสูง  ',
                    image: require('../../image/physician.jpg'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/physician.jpg")} style={styles.icon} />
                <Text style={styles.itemText}>อายุรเเพทย์</Text>
         </TouchableOpacity>

        


        {/* creative ครีเอทีฟโฆษณา */}
        <TouchableOpacity
         style={styles.item}
                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'ครีเอทีฟโฆษณา',
                    itemName1: 'creative',
                    synopsis: 'ครีเอทีฟคือผู้ที่สร้างสรรค์โฆษณาต่างๆ ที่เราเคยเห็นกัน ไม่ว่าจะเป็นโฆษณาทีวี, วิดีโอออนไลน์, สื่อสิ่งพิมพ์ หรือสปอตวิทยุก็ตามแต่ ครีเอทีฟจะต้องคิดไอเดียที่สอดคล้องกับสินค้าและการตลาดของลูกค้า ควบคู่ไปกับสไตล์งานโฆษณาที่เหมาะสมกับสื่อที่ใช้ เช่น สปอตโฆษณาวิทยุต้องใช้การเล่นคำ การออกเสียง ซึ่งผลลัพธ์ต้องนำไปสู่เป้าหมายที่ลูกค้าต้องการในแต่ละครั้ง ดังนั้นอาชีพครีเอทีฟจึงถือว่าต้องใช้ความสามารถรอบด้านมากๆ นับว่าเป็นอาชีพที่ท้าทายและต้องพบเจออะไรใหม่ๆ ตลอดเวลา',
                    skill: 'ทักษะการสื่อสาร\n- ทักษะการคิดวิเคราะห์\n- ทักษะการแก้ปัญหาตัดสินใจ\n- ทักษะการจัดการ\n- ทักษะการใช้ภาษาหรือด้านทัศนศิลป์\n                          ',

                    feature: 'มีความคิดสร้างสรรค์และ\n  ชอบคิดนอกกรอบ \n- ชอบเรียนรู้สิ่งใหม่ช่างสังเกต\n  ไม่ตกเทรนด์\n- มีมนุษยสัมพันธ์และทำงานร่วมกับ\n  ผู้อื่นได้ดี\n- มีความยืดหยุ่นในการทำงาน\n- คุณสมบัติเฉพาะบางตำแหน่ง\n',
                    image: require('../../image/creative.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/creative.png")} style={styles.icon} />
                <Text style={styles.itemText}>ครีเอทีฟโฆษณา</Text>
         </TouchableOpacity>

        {/* Data Analyst นักวิเคราะห์ข้อมูล */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'นักวิเคราะห์ข้อมูล',
                    itemName1: 'Data Analyst',
                    synopsis: 'ในโลกยุคใหม่ที่ข้อมูลจำนวนมหาศาลและหลายอุตสาหกรรมไม่ว่าจะเป็นธุรกิจการค้า ธนาคาร วงการกีฬา และอื่น ๆ เริ่มเห็นความสำคัญของ Data และนำมาใช้ประกอบการตัดสินใจและขับเคลื่อนกลยุทธ์ทางธุรกิจ อาชีพที่เป็นที่จับตามอง และกำลังมีความสำคัญ ก็คือ นักวิเคราะห์ข้อมูล Data Analyst',
                    skill: 'แก้ปัญหาตัดสินที่ดี\n- ทักษะการคิดวิเคราะห์\n- ทักษะทางคณิตศาสตร์\n- ทักษะทางคอมพิวเตอร์\n',

                    feature: 'กระตือรือร้นและเรียนรู้ได้ไว\n- ช่างสังเกต\n- ชอบเรื่องตัวเลขและข้อมูล\n                                ',
                    image: require('../../image/DataAnalyst.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/DataAnalyst.png")} style={styles.icon} />
                <Text style={styles.itemText}>นักวิเคราะห์ข้อมูล</Text>
         </TouchableOpacity>


        {/* Data Scientist นักวิทยาศาสตร์ข้อมูล */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'นักวิทยาศาสตร์ข้อมูล',
                    itemName1: 'Data Scientist',
                    synopsis: 'อาชีพนักวิทยาศาสตร์ข้อมูล หรือ Data scientists เป็นอาชีพที่อาศัยทักษะการนำข้อมูลขนาดใหญ่มาใช้ประโยชน์  โดยผ่านกระบวนการเก็บและจัดการข้อมูลขนาดใหญ่ วิเคราะห์ข้อมูลหารูปแบบความสัมพันธ์ของข้อมูลที่ซ่อนอยู่โดยการสร้างโมเดลทางคณิตศาสตร์  เมื่อวิเคราะห์ออกมาแล้ว จึงนำสิ่งเหล่านั้นมาช่วยในการตัดสินใจทางธุรกิจ การพัฒนาสินค้า บริการ รวมทั้งทำนายผลประกอบการที่จะเกิดขึ้นในอนาคต',
                    skill: 'ทักษะทางคณิตศาสตร์และสถิติ\n- ทักษะทางคอมพิวเตอร์และไอที\n- ทักษะการคิดวิเคราะห์\n- ทักษะในการสื่อสาร\n- ทักษะการทำงานเป็นทีม\n- ',

                    feature: 'พัฒนาตัวเองอยู่เสมอและหมั่นศึกษาหา\n  ความรู้ใหม่ๆ\n- ช่างสงสัยและตั้งคำถามตรงประเด็น\n- มีความรู้พื้นฐานทางด้านธุรกิจ\n                                              ',
                    image: require('../../image/DataScientist.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/DataScientist.png")} style={styles.icon} />
                <Text style={styles.itemText}>นักวิทยาศาสตร์ข้อมูล</Text>
         </TouchableOpacity>        


        {/* Food Model Maker นักทำโมเดลอาหาร */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'นักทำโมเดลอาหาร',
                    itemName1: 'Food Model Maker',
                    synopsis: 'ปัจจุบันในประเทศไทย การทำโมเดลอาหารได้รับความนิยมมากขึ้น ในหมู่ผู้ประกอบการร้านอาหารต่าง ๆ ไม่ว่าจะขนาดเล็กหรือใหญ่ ต่างใช้โมเดลในการจัดแสดงเมนูอาหารเพื่อดึงดูดลูกค้ากันเป็นจำนวนมาก โดยเฉพาะร้านอาหารญี่ปุ่น เกาหลี และอาหารไทยแบรนด์ดังที่มีหลากหลายสาขา โดยจุดเริ่มต้นของการทำโมเดลนั้นมาจากประเทศในแถบยุโรปที่ได้นำกระดาษมาเป็นแบบจำลอง แต่ยังคงจำกัดอยู่ในวงการแพทย์ จนกระทั่งคนญี่ปุ่นได้นำมาดัดแปลงเป็นโมเดลอาหารที่ทำจากขี้ผึ้ง  และพัฒนามาสู่การใช้วัสดุอื่น ๆ ในการผลิตโมเดลจำลองเพื่อให้มีความเสมือนจริงมากที่สุด เช่น พลาสติก เรซิน',
                    skill: 'ทักษะด้านศิลปะ  \n- ทักษะด้านวิทยาศาสตร์\n- ทักษะการออกแบบ\n- ทักษะการวางแผนและจัดการเวลา\n- ทักษะการเรียนรู้\n                           ',

                    feature: 'รักงานด้านศิลปะ \n- อดทนและมีสมาธิ\n- พร้อมเรียนรู้สิ่งใหม่\n- มีความคิดสร้างสรรค์\n- มีความละเอียดรอบคอบ\n- ช่างสังเกต\n                       ',
                    image: require('../../image/FoodModelMaker.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/FoodModelMaker.png")} style={styles.icon} />
                <Text style={styles.itemText}>นักทำโมเดลอาหาร</Text>
         </TouchableOpacity>

                
        {/* forensicPathologist แพทย์นิติเวช */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'แพทย์นิติเวช',
                    itemName1: 'forensicPathologist',
                    synopsis: 'แพทย์นิติเวช หมอนิติเวช คือแพทย์เฉพาะทางพิเศษผู้ทำหน้าที่ตรวจสอบหาหลักฐานและสาเหตุเการเสียชีวิต ด้วยหลักการทางการแพทย์และนิติเวช โดยทำงานร่วมกับเจ้าหน้าที่ตำรวจและเจ้าหน้าที่หน่วยพิสูจน์หลักฐานของหน่วยงานรัฐฯ มีหน้าที่หลักคือการตรวจสอบ พิสูจน์ และส่งข้อมูลให้กับทางฝ่ายกฎหมายพิจารณา จึงเปรียบเสมือนคนที่ส่งสารจากผู้ตายผ่านร่องรอยที่หลงเหลืออยู่',
                    skill: 'ทักษะทางการแพทย์\n- ทักษะการสื่อสาร จิตวิทยา\n- ทักษะภาษาอังกฤษ\n                                  ',

                    feature: 'ชอบหรือมีใจรักในงาน \n- ไม่กลัวเลือด ไม่กลัวศพ ใจกล้า\n- ช่างสังเกต ใส่ใจรายละเอียดเล็ก ๆ\n- มีคุณธรรม จริยธรรม จรรยาบรรณ\n  ในวิชาชีพ\n- ร่างกายที่แข็งแรง\n                                  ',
                    image: require('../../image/forensicPathologist.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
              <Image source={require("../../image/forensicPathologist.png")} style={styles.icon} />
              <Text style={styles.itemText}>แพทย์นิติเวช</Text>
         </TouchableOpacity>    

        {/* Graphic designer กราฟิกดีไซนเนอร์ */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'กราฟิกดีไซนเนอร์',
                    itemName1: 'Graphic designer',
                    synopsis: 'เบื้องหลังของความสวยงาม นักออกแบบไม่ได้แค่วาดเส้นเท่ ๆ ออกมาอย่างง่ายดาย หากต้องผ่านกระบวนการคิดอย่างเป็นขั้นตอน อย่างมีหลักการ เพื่อตอบสนองวัตถุประสงค์ของชิ้นงานนั้น ๆ ว่ามีขึ้นเพื่ออะไร แล้วจะใช้วิธีอะไรเพื่อตอบสนองเป้าหมายหลัก ดังนั้น ทุกไอเดียบรรเจิดล้วนต้องมีที่มา และกว่าจะคลอดออกมาได้ต้องผ่านความยาก ความลำบากไม่ต่างกับทุกอาชีพ',
                    /*คุณสมบัติ*/ 
                    skill: 'ทักษะการคิดวิเคราะห์\n- ทักษะการสื่อสาร\n- ทักษะการวาดรูป\n  และใช้โปรแกรมคอมพิวเตอร์\n- ทักษะการประยุกต์ใช้\n- การแก้ปัญหาเฉพาะหน้า\n- ทักษะการจัดการเวลา',
                    
                    feature: 'มีความคิดสร้างสรรค์\n- ช่างสังเกต รักการเรียนรู้\n- เชื่อมั่นในตนเอง\n- มีมนุษยสัมพันธ์ที่ดี\n- มีวินัย อดทน\n- มีความเข้าใจคนอื่น\n- ละเอียดรอบคอบ\n- มีความรับผิดชอบ\n             ',
                    image: require('../../image/Graphicdesigner.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/Graphicdesigner.png")} style={styles.icon} />
                <Text style={styles.itemText}>กราฟิกดีไซนเนอร์</Text>
         </TouchableOpacity>

        {/* Physiotherapist นักกายภาพบำบัด */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'นักกายภาพบำบัด',
                    itemName1: 'Physiotherapist',
                    synopsis: 'กายภาพบำบัด (Physical Therapy) เป็นวิชาชีพด้านวิทยาศาสตร์สุขภาพ ที่มุ่งส่งเสริม ป้องกัน และรักษาปัญหาการเคลื่อนไหวผิดปกติจากโรคหรือภาวะต่างๆ ตลอดช่วงชีวิต โดยมีนักกายภาพบำบัด (PT) และผู้ช่วยนักกายภาพบำบัดทำหน้าที่ดูแลผู้ป่วยตามแนวทางการรักษาที่กำหนด',
                    skill: 'ทักษะความชำนาญในการใช้มือทั้งสองข้าง\n- ทักษะด้านการพูดคุยสื่อสาร\n- ทักษะการแก้ไขปัญหา รู้จักยืดหยุ่น\n  พลิกแพลง\n- ทักษะการจัดการเวลา\n                                                             ',

                    feature: 'ทักษะการแก้ไขปัญหา \n- รู้จักยืดหยุ่น \n- พลิกแพลง \n- วิธีการทำการรักษา \n- เพื่อให้เหมาะสมกับคนไข้ในแต่ละครั้ง\n              ',
                    image: require('../../image/Physiotherapist.webp'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/Physiotherapist.webp")} style={styles.icon} />
                <Text style={styles.itemText}>นักกายภาพบำบัด</Text>
         </TouchableOpacity>      

        {/* Programmer โปรเเกรมเมอร์ */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'โปรเเกรมเมอร์',
                    itemName1: 'Programmer',
                    synopsis: 'คอมพิวเตอร์โปรแกรมเมอร์คือผู้นำข้อมูลไปออกแบบรายละเอียดการวางโครงสร้างระบบคอมพิวเตอร์  โดยเขียนโปรแกรมด้วยภาษาทางคอมพิวเตอร์ที่แตกต่างกัน เช่น ภาษาซี ภาษาจาวา เป็นต้น พวกเขามีหน้าที่เขียนและทดสอบรหัสหรือโค้ดเพื่อทำให้คอมพิวเตอร์และซอฟต์แวร์ทำงานได้ โดยอาจมีนักวิเคราะห์ระบบช่วยทำการตรวจสอบอีกครั้งเพื่อให้มั่นใจในผลลัพธ์การทำงาน และในกรณีที่เกิดปัญหาจากการทำงาน คอมพิวเตอร์โปรแกรมเมอร์จะทำการตรวจสอบรหัสที่เกิดข้อผิดพลาดและซ่อมแซมแก้ไขให้ถูกต้อง',
                    skill: 'ทักษะด้านคอมพิวเตอร์ \n- ทักษะการวิเคราะห์ \n- Problem Solving',

                    feature: 'มีความรู้ด้านคอมพิวเตอร์และ\n สนใจด้านการเขียนโปรแกรม\n- ขวนขวายที่จะเรียนรู้สิ่งใหม่ๆ\n- มีความคิดสร้างสรรค์\n- ละเอียดถี่ถ้วน\n                                               ',
                    image: require('../../image/Programmer.png'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/Programmer.png")} style={styles.icon} />
                <Text style={styles.itemText}>โปรเเกรมเมอร์</Text>
         </TouchableOpacity>
        

        {/* Public Relations Specialist นักประชาสัมพันธ์ */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'นักประชาสัมพันธ์',
                    itemName1: 'Public Relations\nSpecialist',
                    synopsis: 'นักประชาสัมพันธ์ หรือ ที่เรียกกันสั้น ๆ ว่า PR เป็น อาชีพที่คอยสร้างภาพลักษณ์ขององค์กรและผู้บริหาร โดย PR ถือเป็นอาชีพที่เป็นหน้าตาบริษัท ต้องทำหน้าที่วางแผนการประชาสัมพันธ์และสื่อสารองค์กรผ่านสื่อมีเดียหลากหลายประเภท เพื่อให้เกิดภาพลักษณ์และชื่อเสียงที่ดีขององค์กรนั้นๆ',
                    skill: 'ทักษะการสื่อสาร\n- ทักษะความการบริหารจัดการ\n- ทักษะการแก้ไขปัญหา\n- ทักษะการพูด\n- ทักษะการเขียน\n- ทักษะภาษาอังกฤษ\n                           ',

                    feature: 'มีมนุษย์สัมพันธ์ดี\n- ชอบเรียนรู้สิ่งใหม่การเรียนรู้สิ่งใหม่ๆ\n- ละเอียดรอบคอบ\n- มีความอดทนสูง\n                     ',
                    image: require('../../image/PublicRelationsSpecialist.jpg'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
              <Image source={require("../../image/PublicRelationsSpecialist.jpg")} style={styles.icon} />
              <Text style={styles.itemText}>นักประชาสัมพันธ์</Text>
         </TouchableOpacity>         

        {/* Security Engineer วิศวกรความมั่นคง ปลอดภัยทางไซเบอร์ */}
        <TouchableOpacity
         style={styles.item}

                onPress={() =>
                  navigation.navigate('details', {
                    itemName: 'วิศวกรความมั่นคง\nปลอดภัยทางไซเบอร์',
                    itemName1: 'Security Engineer',
                    synopsis: 'Cyber Security ทำหน้าที่ ตรวจจับ วิเคราะห์ และค้นหาการโจมตีทาง Cyber หรือแหล่งข้อมูล ทำการเฝ้าระวังทั้งจากภายในและภายนอก เพื่อแจ้งเหตุให้ลูกค้าหรือองค์กรรับทราบถึงเหตุการณ์ผ่านกระบวนการและช่องทางที่กำหนด เพื่อให้ลูกค้าหรือองค์กรสามารถตอบสนองต่อภัยคุกคาม Cyber ได้อย่างทันท่วงที ',
                    skill: 'ทักษะด้านคอมพิวเตอร์ \n- ทักษะการวิเคราะห์ \n- Problem Solving\n - ทักษะความเป็นผู้นำ\n   และการทำงานเป็นทีม                                                                                                              ',

                    feature: 'สามารถรับแรงกดดันสูงได้\n- มีความกระตือรือร้น\n- คิดเร็วทำเร็ว\n- มีความคิดริเริ่ม\n                                                     ',
                    image: require('../../image/software-developer.jpeg'),
                    image2: require('../../image/feature.png'),
                    image3: require('../../image/skill.png'),


                  })
                }
              >
                <Image source={require("../../image/software-developer.jpeg")} style={styles.icon} />
                <Text style={styles.itemText}>วิศวกรความมั่นคงปลอดภัยทางไซเบอร์</Text>
         </TouchableOpacity>

        
        
        <TouchableOpacity 
          style={styles.item}
        >
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEFF0",
    padding: 20,
  },
  header: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-evenly", // ระยะห่างเท่ากันทั้งซ้าย-ขวา
    marginTop: 23,
    marginBottom: 40,
    gap:20,
    
  },
  smallImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 40,
    paddingHorizontal: 70, // ปรับ padding เพื่อให้มีระยะขอบ
    
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FADADD",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

/* End */