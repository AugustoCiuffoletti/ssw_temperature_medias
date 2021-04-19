# Calcolo convergente della temperatura media

Per calcolare la media è necessario avere i dati di tutte le città. Qui le richieste dei dati vengono inviate in stretta successione. I dati vengono elaborati appena ricevuti, ma la media sarà corretta solo dopo che tutti i dati saranno arrivati: prima il valore non è quello corretto. Il metodo è semplice ma espone a possibili, pericolose inconsistenze. Il codice inoltre presenta una ridondanza, in quanto la request viene utilizzata tanto per acquisire i dati da visualizzare, quanto nel calcolo della media. Meglio introdurre un callback. Attenzione, la API key nel codice no sono attive: collegarsi al servizio https://openweathermap.org/ per registrarsi ed ottenerne una gratuitamente.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswtms)
