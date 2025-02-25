let body = document.querySelector('body');
body.addEventListener('click', function(event){
    let spark = document.createElement('div');
    spark.classList.add('spark');
    body.appendChild(spark);
})