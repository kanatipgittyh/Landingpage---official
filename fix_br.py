import sys

filepath = '/Users/markpubearmaxc/Desktop/Landingpage-ชวนคุยให้รู้จักกัน-official/index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

def should_hide(line):
    targets = [
        "Guidebook ที่รวม Framework และตัวอย่างบทสนทนาจริง",
        "เห็นคนที่อยากรู้จักอยู่ตรงหน้า",
        "มีโอกาสได้คุยอยู่ตรงหน้า",
        "คุยได้ไม่กี่ประโยค ก็ไม่รู้จะไปต่อยังไง",
        "ทั้งเรื่องงาน มิตรภาพ หรือคนที่อยากรู้จัก",
        "ปัญหาไม่ใช่คุณพูดไม่เก่ง",
        "Guidebook สำหรับเข้าใจ",
        "สองอย่างทำงานคู่กัน",
        "เนื้อหาหลักที่อธิบาย Framework",
        "สรุประบบจาก Guidebook เป็นแผนที่",
        "จากความสงสัยหนึ่งครั้ง",
        "คุณไม่จำเป็นต้องอ่านหนังสือทุกเล่มที่ผมอ่าน",
        "ไม่ต้องไล่งานวิจัยทุกชิ้น",
        "จากหนังสือหลายเล่ม และงานวิจัยด้านการสื่อสาร",
        "คุณสามารถเริ่มทำความเข้าใจได้",
        "ทุกวันนี้เราอยู่แก๊งเดียวกัน"
    ]
    for t in targets:
        if t in line:
            return True
    return False

for i in range(len(lines)):
    if "<br>" in lines[i] and should_hide(lines[i]):
        lines[i] = lines[i].replace("<br>", '<br class="hide-mobile">')

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)
