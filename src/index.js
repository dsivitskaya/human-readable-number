module.exports = function toReadable(number) {
    if(number === 0) return "zero";
    
    var unithundred = "";
    var unitteen = "";
    var unitty = "";
    var unitsimple = "";

    var getUnit = function (num) {
        let unit = "";
        switch (num) {
            case 1:
                unit = "one"; break;
            case 2:
                unit = "two"; break;
            case 3:
                unit = "three"; break;
            case 4:
                unit = "four"; break;
            case 5:
                unit = "five"; break;
            case 6:
                unit = "six"; break;
            case 7:
                unit = "seven"; break;
            case 8:
                unit = "eight"; break;
            case 9:
                unit = "nine"; break;
        }
        return unit;
    };

    var num100 = parseInt(number / 100); // 1-t number
    unithundred = getUnit(num100);

    var num10 = number % 100; // 23
    if (num10 >= 10 && num10 <= 19) {
        switch (num10) {
            case 10:
                unitteen = "ten"; break;
            case 11:
                unitteen = "eleven"; break;
            case 12:
                unitteen = "twelve"; break;
            case 13:
                unitteen = "thirteen"; break;
            case 14:
                unitteen = "fourteen"; break;
            case 15:
                unitteen = "fifteen"; break;
            case 16:
                unitteen = "sixteen"; break;
            case 17:
                unitteen = "seventeen"; break;
            case 18:
                unitteen = "eighteen"; break;
            case 19:
                unitteen = "nineteen"; break;
        }
        return unithundred
            ? `${unithundred} hundred ${unitteen}`.trim() : `${unitteen}`;
    } else {
        var num20 = parseInt(num10 / 10); //2-d number
        switch (num20) {
            //case 1: unitty = "ten"; break;
            case 2:
                unitty = "twenty"; break;
            case 3:
                unitty = "thirty"; break;
            case 4:
                unitty = "forty"; break;
            case 5:
                unitty = "fifty"; break;
            case 6:
                unitty = "sixty"; break;
            case 7:
                unitty = "seventy"; break;
            case 8:
                unitty = "eighty"; break;
            case 9:
                unitty = "ninety"; break;
        }
    }

    var num3 = num10 % 10; // 3-d number
    unitsimple = getUnit(num3);

    if (!unitty && unithundred) {
        return `${unithundred} hundred ${unitsimple}`.trim();
    } else if (unithundred) {
        return `${unithundred} hundred ${unitty} ${unitsimple}`.trim();
    } else {
        return `${unitty} ${unitsimple}`.trim();
    }
};
