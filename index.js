const puppeteer = require('puppeteer');

const x = 0
        async function bot() { 
            const browser = await puppeteer.launch({
                    headless : false
                });
                
            do{const page = await browser.newPage();
        
            await page.goto('https://agar.io/#5SA46L');
            
            await page.click('[id="play"]')
            x++;
            }while(x<2)
        }
    
bot()
    
  
