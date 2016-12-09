$(document).ready(function(){
                var ask = 0;

                // Je créer une fonction permettant de cacher
                $('#close').click(function() {
                    if ( ask == 0 ) { 
                        $('.positionnement').fadeOut('slow');
                        ask = 1;
                        $('.visible').fadeIn('slow');
                    }
                }); 

                $('.visible').click(function() { 
                    if ( !ask == 0 ) {
                        $('.positionnement').fadeIn('slow');
                        ask = 0;
                        $('.visible').fadeOut('slow');
                    }  
                });

            }); // Fin du script jquery