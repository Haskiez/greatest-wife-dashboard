document.onreadystatechange = function () {
    if (document.readyState == 'interactive') {
        // focus the search input on load
        var input = document.getElementById('search-bar');
        input.focus();


        // adjective span
        var adjSpan = document.getElementById('adj-text');

        // adjective array
        var adjArr = [
            'amazing',
            'stunning',
            'beautiful',
            'loving',
            'patient',
            'caring',
            'gorgeous',
            'empathetic',
            'sexy',
            'spiritual'
        ];

        // cycling function
        function cycleAdj() {
            var randIndex = Math.floor(Math.random() * 10);
            adjSpan.innerHTML = adjArr[randIndex];
        }

        // set interval to change the adj
        setInterval(cycleAdj, 3000);
    }
}