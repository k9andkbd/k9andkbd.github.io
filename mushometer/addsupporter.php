<?php 

$fileName = "supportercount.txt"; # the file which the data is stored 

$counter = fopen($fileName,'r'); # open the file as readable 
$readFile = fread($counter, filesize($fileName)); # read the entire contents of the file 
fclose($counter); # close the file 

$newCount = $readFile; # give the $newCount variable the value of $readFile 
$newCount += 1; # add 1 to newCount 

# open counter.txt and save the new number # 

$counter = fopen($fileName, 'w'); # open the file for writing 
fwrite($counter, $newCount); # write to counter.txt with the new count number 

fclose($counter); # close the file 

?>

