Synth.setSampleRate(44100);
    Synth.setVolume(1.0);

    //create a piano instrument, other options are organ, edm or acoustic.
    var cKey = document.getElementById('c');
    var cShKey = document.getElementById('cSh');
    var dKey = document.getElementById('d');
    var dShKey = document.getElementById('dSh');
    var eKey = document.getElementById('e');
    var fKey = document.getElementById('f');
  	var fShKey = document.getElementById('fSh');
  	var gKey = document.getElementById('g');
  	var aKey = document.getElementById('a');
  	var aShKey = document.getElementById('aSh');
  	var bKey = document.getElementById('b');

    var instrument = Synth.createInstrument('piano');

    //play a 4th octave C note for 2 seconds
 
 cKey.addEventListener('mouseover', function() {
 	instrument.play('C', 4, 2, 2);
 });
    
	//play a 4th octave C# note for 2 seconds
cShKey.addEventListener('mouseover', function() {
	instrument.play('C#', 4, 2, 2);

});

dKey.addEventListener('mouseover', function() {
	instrument.play('D', 4, 2, 2);
});

dShKey.addEventListener('mouseover', function() {
	instrument.play('D#', 4, 2, 2);
});

eKey.addEventListener('mouseover', function() {
	instrument.play('E', 4, 2, 2);
});

fKey.addEventListener('mouseover', function(){
	instrument.play('F', 4, 2, 2);
});

fShKey.addEventListener('mouseover', function() {
	instrument.play('F#', 4, 2, 2);
});

gKey.addEventListener('mouseover', function() {
	instrument.play('G', 4, 2, 2);
});

aKey.addEventListener('mouseover', function() {
	instrument.play('A', 4, 2, 2)
});

aShKey.addEventListener('mouseover', function() {
	instrument.play('A#', 4, 2, 2)
});

bKey.addEventListener('mouseover', function() {
	instrument.play('B', 4, 2, 2);
})
