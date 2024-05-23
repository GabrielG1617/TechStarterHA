varsta = 77

if (varsta < 6 ){
    console.log("RO:aveti calatoria gratuita")
    console.log("DE:Du hast freie Fahrt")

}

else if (varsta >= 6 && varsta <= 17){
    console.log("RO:pretu unei calatorii este de 5€")
    console.log("RO:cu abonamentul de elev calatoria este gratuita  ")
    console.log("DE:Der Preis für eine Fahrt beträgt 5 €")
    console.log("DE:Mit dem Studentenausweis ist die Fahrt kostenlos")
}


else if (varsta >=18 && varsta <=66 ){
    console.log (" RO:pretul unei calatorii este de 10€")
    console.log (" RO cu abonament de student calatoria este gratuita ")
    console.log("DE:Der Preis für eine Fahrt beträgt 10 €")
    console.log("DE:Mit dem Studierendenausweis ist die Fahrt kostenlos")
}

else if( varsta > 66 && varsta <= 75){
    console.log ("RO:pretul unui bilet de calatorie este 15€")
    console.log("DE:Der Preis für eine Vollfahrkarte beträgt 15 €")
}

else { varsta >= 76 
    console.log("RO:daca esti pensionar nu trebuie sa platesti.")
    console.log("DE:Mit einem Rentner- oder Kriegsveteranenausweis ist die Fahrt kostenlos.")
}