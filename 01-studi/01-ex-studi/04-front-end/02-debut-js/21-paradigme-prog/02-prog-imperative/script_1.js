// On déclare la fonction ici
function factorielle(nombre)
{
  let produit = 1;
  for (let i = 1; i <= nombre; i++) {
    console.log(i)
    produit *= i;
    console.log(produit)
  }

  if (produit > 100) {
    console.log('Superieur');
  } else {
    console.log('Inferieur');
  }
}

// On appelle la fonction en lui donnant le paramètre 3
factorielle(5);