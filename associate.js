//DATA USED as argument FOR info parameter
const ticketTypes = {
  general: {
    description: 'General Admission',
    priceInCents: {
      child: 2000,
      adult: 3000,
      senior: 2500
    }
  },
  membership: {
    description: 'Membership Admission',
    priceInCents: {
      child: 1500,
      adult: 2800,
      senior: 2300
    }
  },
  extras: {
    movie: {
      description: 'Movie Access',
      priceInCents: {
        child: 1000,
        adult: 1000,
        senior: 1000
      }
    },
    education: {
      description: 'Education Access',
      priceInCents: {
        child: 1000,
        adult: 1200,
        senior: 1200
      }
    },
    terrace: {
      description: 'Terrace Access',
      priceInCents: {
        child: 500,
        adult: 1000,
        senior: 1000
      }
    }
  }
};

//DATA USED as argument FOR tickets parameter
const ticketInfo = {
  ticketType: 'general',
  entrantType: 'child'
};

/**
 * findPrice()
 * ----------------
 * Based on the above ticket Info object,
 * Dynamically return a string that says:
   'General Admission for a child is $20.00'
 * Your solution should work for any ticketInfo object containing
 * the same two keys even if they have different values.

 * @param {Object} tickets 
 * @param {Object} info 
 * @return {string}
 */
function findPrice(tickets, info) {
  return `${ticketTypes.general.description} for a child is $${(ticketTypes.general.priceInCents.child/100).toFixed(2)}`
}

console.log(findPrice(ticketTypes, ticketInfo));
