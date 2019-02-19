# Kirpėjų sistemos vartotojo vadovas

Kirpėjų sistema tinkamai veikia tik Firefox naršyklėje. 

Atidariusi sistemą kirpėja turi įvesti kliento duomenis:
1. Vardą
2. Pavardę
3. Telefono numerį

Suvedusi kliento asmeninius duomenis, kirpėja pasirenka datą, kada klientas nori rezervuotis kirpimui. Vartotojas gali būti rezervuotas kirpimui tik esančiam ir ateinančiam mėnesiui. Pvz. vartotojas sausio mėnesį rezervuojamas kirpimui. Atvykimo kirpimuisi mėnesiai gali būti pasirenkami tik tarp sausio ir vasario mėnesių.

Kadangi kirpykla dirba laiko tarpe nuo 10:00 iki 20:00, o klientui skiriama 15 min, kliento rezervacijos valandos yra nuo 10 iki 19, o minutės: 00, 15, 30, 45.

Kai užpildomi visi kliento duomenys, paspaudžiamas mygtukas "Reservate" tam, kad rezervacija būtų atlikta sėkmingai. Paspaudus mygtuką, kirpėjai atvaizduojama kliento rezervacijos informacija.


# Apsauga nuo netinkamo įvedimo
1. Jei kirpėja palieka bent vieną tuščią lauką įvedant asmeninę informaciją, programa neleidžia atlikti rezervacijos.
2. Jei kirpėja pasirenka einamo mėnesio ankstesnę dieną, nei atliekama rezervacija, tuomet kirpėja ekrane matys pranešimą, kad pasirinkta diena yra neteisinga ir vartotojas negali būti užrezervuotas.
3. Jei kirpėja pasirenka netinkamą mėnesį, tuomet ekrane bus rodomas pranešimas, kad pasirinktas mėnesis netinkamas ir vartotojas negali būti užrezervuotas.
