<?php 


$nO = 2992;
$nI = 0;
$i = 0;
$n = $nO;

while($i < 4){
    $r = $n % 10;
    $n = $n / 10;
    $nI = $nI * 10 + $r;
    $i += 1;
}
echo ( $nO === $nI ) ? "El numero es capicua" : "El numero no es capicua";

?>