//iinitialize class BankAccount
class BankAccount {
    //Define constructor with property saldo
    constructor(balance = 0) {
        this.saldo = balance
    }

    //initialize method deposit
    async deposit() {
        try {
            //initialize amount as input of cash deposit
            let amount = parseFloat(prompt('Enter the cash deposit amount'))
            if (isNaN(amount)) {
                alert('Sorry, transaction is canceled')
                throw new Error('transaction canceled by system')
            }

            if (!isNaN(amount) && amount > 0 && amount != null) {
                const cancelDeposit = !confirm('Are you sure you are making a transaction?')
                if (!cancelDeposit) {
                    this.saldo += amount
                    this.showBalance()
                    await this.showMessage(`Cash Deposit of Rp. ${amount} Successful, Your Remaining Balance Rp. ${this.saldo}`)
                }
                else {
                    alert('Transaction is canceled')
                    throw new ('transaction canceled by user')
                }
            } else {
                await this.showMessage('Transaction process failed, please enter the correct input')
                throw new Error('process invalid')
            }
        }
        catch (err) {
            console.error('Message error : ', err)
        }
        return this.saldo
    }

    //initialize method withdraw
    async withdraw() {
        try {
            //initialize amount as input of cash withdraw
            let amount = parseFloat(prompt('Enter the cash withdrawal amount'))

            //check tipe data and condition prompt
            if (isNaN(amount)) {
                alert('Sorry, transaction is canceled')
                throw new Error('transaction canceled by system')
            }

            if (!isNaN(amount) && amount > 0 && amount <= this.saldo) {
                const cancelWithdraw = !confirm('Are you sure you are making a transaction?')
                //confirm the transaction
                if (!cancelWithdraw) {
                    this.saldo -= amount
                    this.showBalance()
                    await this.showMessage(`Cash Deposit of Rp. ${amount} Successful, Your Remaining Balance Rp. ${this.saldo}`)
                }
                else {
                    alert('Transaction is canceled')
                    throw new ('transaction canceled by user')
                }
            } else {
                await this.showMessage('Transaction process failed, please enter the correct input')
                throw new Error('process invalid')
            }
        } catch (err) {
            console.error('Message error : ', err)
        }
        return this.saldo
    }

    //initialize conditional set time out at process transactions
    async showMessage(msg) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('saldo').innerHTML = 'Saldo Anda Tersisa Sebesar Rp. ' + this.saldo.toString()
                alert(msg)
                resolve('success')
            }, 3000)
        })
    }

    //initialize conditional balance
    showBalance() {
        return this.saldo
    }

}

const bankAccount = new BankAccount()
