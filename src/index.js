module.exports = function toReadable (number) {
    number = String(number);
    let ans = [];
    let hhh = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let hh = ['0','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let h = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ost = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let i = 0;
    if (number.length === 3) {
        while (i <= 9) {
            if (number[0] == i) {
                ans.push(hhh[i]);
            } 
            i++;
        }
        i = 0;
        if (number[1] == 0) {
            while (i <= 9) {
                if (number[2] == i && number[2] !== 0) {
                    ans.push(h[i]);
                }
                i++;
            }

        } else if (number[1] == 1) {
            while (i <= 9) {
                if (number[2] == i) {
                    ans.push(ost[i]);
                }
                i++;
            }

        } else {
            while (i <= 9) {
                if (number[1] == i) {
                    ans.push(hh[i]);
                }
                i++;
            }
        }  

        i = 0;
        if (number[1] !== 0 && number[1] !== 1 && number[2] !== 0) {
            while (i <= 9) {
                if (number[2] == i) {
                    ans.push(h[i]);
                }
                i++;
            }
        }

        if (number[1] == 0 && number[2] == 0) {
            return ans[0];
        } else if (number[1] == 0 || number[1] == 1) {
            return ans[0]+' '+ans[1];
        } else if (number[2] == 0) {
            return ans[0]+' '+ans[1];
        } else {
            return ans[0]+' '+ans[1]+' '+ans[2];
        }

    } else if (number.length === 2) {
        i = 0;
        if (number[0] == 0) {
            while (i <= 9) {
                if (number[1] == i) {
                    ans.push(h[i]);
                }
                i++;
            }

        } else if (number[0] == 1) {
            while (i <= 9) {
                if (number[1] == i) {
                    ans.push(ost[i]);
                }
                i++;
            }

        } else {
            while (i <= 9) {
                if (number[0] == i) {
                    ans.push(hh[i]);
                }
                i++;
            }
        }  

        i = 0;
        if (number[0] !== 0 && number[0] !== 1 && number[1] !== 0) {
            while (i <= 9) {
                if (number[1] == i) {
                    ans.push(h[i]);
                }
                i++;
            }
        }

        if (number[0] == 0 && number[1] == 0) {
            return 'zero';
        } else if (number[1] == 0 || number[0] == 1) {
            return ans[0];
        } else {
            return ans[0]+' '+ans[1];
        }

    } else if (number.length === 1) {
        i = 0;
        while (i <= 9) {
            if (number[0] == i) {
                return h[i];
            }
            i++;
        }
    }
    
}
 