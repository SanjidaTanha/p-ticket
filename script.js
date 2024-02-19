let totalPrice = document.getElementById('totalPrice').innerText;
let grandTotal = document.getElementById('grandTotal').innerText;
let selectedSeatNumber = document.getElementById('selectedSeatNumber').innerHTML;
let totalSeats = document.getElementById('seatLeft').innerText;
totalPrice = parseInt(totalPrice);
grandTotal = parseInt(grandTotal);
totalSeats = parseInt(totalSeats);


// Seat Selection Section
const seatContainer  = document.getElementById('seat_plan');
const seatID = seatContainer.querySelectorAll('button');
// console.log(seatID);
let selectedSeatCnt = 0;
let maxSeat = 1;
for(let i=0; i<seatID.length; i++){
    const seats = seatID[i];
    let flag = false;
    seats.addEventListener('click', function(){
        if(maxSeat <=4){
            if(!flag){
                seats.style.backgroundColor = "#1DD100";
            seats.style.color= "#ffffff";
            selectedSeatNumber++;
            totalSeats--;

            
            totalPrice = maxSeat*550;
            document.getElementById('totalPrice').innerText = totalPrice;
            document.getElementById('grandTotal').innerText = totalPrice;
            document.getElementById('selectedSeatNumber').innerHTML = selectedSeatNumber;
            document.getElementById('seatLeft').innerText = totalSeats;

            maxSeat++;


            // Append seat information
            const selectedSeatInfo = document.getElementById('selectedSeatInfo');
            let div = document.createElement('div');
            div.classList.add('flex','justify-between','py-2');
            for(let i =0; i<3; i++){
                let p = document.createElement('p');
                if(i == 0)
                    p.textContent  = seats.innerText;
                else if(i == 1)
                    p.textContent = 'Economy';
                else
                    p.textContent = '550';

                div.appendChild(p);
            }    
            selectedSeatInfo.appendChild(div);


            }

        }
        else{
            alert('You cannot buy more that 4 tickets!');
        }
    })
}



// Coupon Validation
function couponValidation() {
    let coupon = document.getElementById('coupon').value;
    if (selectedSeatNumber == 4) {
        if (coupon == 'NEW15') {
            document.getElementById('grandTotal').innerText = totalPrice - (parseInt(totalPrice * 15) / 100);

            document.getElementById('couponField').classList.add('hidden');
        } else if (coupon == 'Couple 20') {
            document.getElementById('grandTotal').innerText = totalPrice - (parseInt(totalPrice * 20) / 100);

            document.getElementById('couponField').classList.add('hidden');
        } else {
            alert('Wrong Coupon!');
        }
    } else {
        alert('You need to buy 4 tickets to use coupon!')
    }

}

