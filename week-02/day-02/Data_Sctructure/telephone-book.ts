const object: any = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',

};
let doweknow = false;

Object.entries(object).forEach((value, index, arr) => {
  if (value[0] == 'John K. Miller') {
    console.log(`John's phone is: ${value[1]}`);
  }
  if (value[1] == '307-687-2982') {
    console.log(`phone number is: ${value[0]}`);
  } if (value[0] == 'Chris E. Myers' && value[1] != undefined) {
    doweknow = true;
  }
});

if (doweknow) {
  console.log('We know Chris E. Myers phone number');
} else {
  console.log('We dont know Chris E. Myers phone number');
}
