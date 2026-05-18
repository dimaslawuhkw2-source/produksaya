function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NMzdYCWfQm":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="gamesku.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

