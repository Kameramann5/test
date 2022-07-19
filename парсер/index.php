<?php
include 'phpQuery-onefile.php';
$html = file_get_contents('https://www.kstu.ru/news.jsp?idparent=0&id_cat=1');
$document = phpQuery::newDocument($html);
$echo = $document->find('.news__label__item');
echo $echo;



 //$pos = strpos($content, '<div class="news__label__item">');

 //$content = substr($content, $pos);
 //$pos = strpos($content, '</div>');

 //$content = substr($content,0,$pos);
 //$content = str_replace('<footer class="footer"></footer>','', $content);
// удаляет только теги <strong>

// $content = file_get_contents('https://www.kstu.ru/news.jsp?idparent=0&id_cat=1');

// $pos = strpos($content, '<div class="news__label__item-desc">');

// $content = substr($content, $pos);
// $pos = strpos($content, '</div>');
 //$content = substr($content,0,$pos);

?>


