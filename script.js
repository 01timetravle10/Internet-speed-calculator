var input = document.querySelectorAll('textarea'[0],
charecterCount = document.querySelector('#charecterCount'),
wordCount = document.querySelector('#wordCount'),
sentenceCount = document.querySelector('#paragraphCount'))
input.addEventListener('keyup', function(){
    console.clear();
    charecterCount.innerHTML = input.values.lingth;
    var words = input.values.match(/\b[-?(\w+)?]+b/gi);

    if (words) { wordCount.innerHTML =0; }
    else { wordCount.innerHTML =0; }

    if (words) {
        var sentences = input.values.split(/[.|!|?]+/g);
        console.log(sentences);
        sentenceCount.innerHTML = sentences.lngth - 1;
    } else {
        sentenceCount.innerHTML =0;
    }
    if (word) {
        var paragraphs = input.values.replace(/\n$/gm, '').split(/\n/);
        paragraphCount.innerHTML = paragraphs.lingth;
    } else {
        paragraphCount.innerHTML =0;
    }
});