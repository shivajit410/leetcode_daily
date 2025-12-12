// Problem: https://leetcode.com/problems/count-mentions-per-user/description/
// Solution: https://leetcode.com/problems/count-mentions-per-user/submissions/1853426036/

// Intuition - Create an object key -> id, value -> [status(online,offline), timestamp]
// Sort events based timestamp, if timestamp is same, OFFLINE takes precedence over MESSAGE
// For Type 'MESSAGE' -> 
//     For 'ALL' -> Increment all ids
//     For 'HERE' -> Increment all online Users (Check online has a specific condition for time diff > 60)
//     For Specific Ids -> Increment those Ids
// For Type 'OFFLINE' ->
//     Set the object with that specific id to offline status and set the timestamp as given value
var countMentions = function(numberOfUsers, events) {
    const result = new Array(numberOfUsers).fill(0);
    const myObj = {};
    for (let i = 0; i < numberOfUsers; i++) {
        myObj[i] = [1, 0];
    }

    events.sort((a,b) => {
        const rank = {
            'OFFLINE': 0,
            'MESSAGE': 1
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return rank[a[0]] - rank[b[0]];
        }
    })

    const checkOnline = (eventTimeStamp) => {
        let onlineIds = [];
        for (const [key, value] of Object.entries(myObj)) {
            if (value[0] === 1) {
                onlineIds.push(Number(key));
            } else {
                if (eventTimeStamp - value[1] >= 60) {
                    myObj[key] = [1, Number(eventTimeStamp)];
                    onlineIds.push(Number(key));
                }
            }
        }
        return onlineIds;
    }

    for (let i = 0; i < events.length; i++) {
        if (events[i][0] === 'MESSAGE') {
            if (events[i][2] === 'ALL') {
                for (let i = 0; i < result.length; i++) {
                    result[i]++;
                }
            } else if (events[i][2] === 'HERE') {
                const onlineIds = checkOnline(events[i][1]);
                for (const id of onlineIds) {
                    result[id]++;
                }
            } else {
                const ids = events[i][2].split(' ');
                for (const id of ids) {
                    let idVal = id.split('id')[1];
                    result[Number(idVal)]++;
                }
            }
        } else {
            myObj[events[i][2]] = [0, Number(events[i][1])];
        }
    }
    return result;
};


// Testcase:
const numberOfUsers = 15;
const events = [["MESSAGE","174","HERE"],["OFFLINE","426","0"],["MESSAGE","98","ALL"],["MESSAGE","383","ALL"],["MESSAGE","178","id13 id1 id6 id0 id8 id6 id0"],["OFFLINE","474","10"],["MESSAGE","190","ALL"],["MESSAGE","190","HERE"],["MESSAGE","366","ALL"],["OFFLINE","113","4"],["MESSAGE","130","HERE"],["OFFLINE","299","10"],["OFFLINE","352","8"],["MESSAGE","167","id12 id13 id2 id10"],["MESSAGE","120","ALL"],["MESSAGE","175","ALL"],["OFFLINE","150","2"],["MESSAGE","124","ALL"],["OFFLINE","70","13"]];
console.log('RESULT ---', countMentions(numberOfUsers, events));

// const numberOfUsers = 2;
// const events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]];
// console.log('RESULT ---', countMentions(numberOfUsers, events));

// const numberOfUsers = 5;
// const events = [["MESSAGE","96","id0"],["MESSAGE","98","ALL"],["OFFLINE","22","0"],["MESSAGE","25","id0"],["OFFLINE","40","4"],["OFFLINE","54","1"],["MESSAGE","41","id2 id2 id1 id4 id4"],["OFFLINE","85","0"],["MESSAGE","86","HERE"]];
// console.log('RESULT ---', countMentions(numberOfUsers, events));
