type LoginDetailsMap = Record<string, Record<string, Record<'primaryLoginDetails', LoginDetails>>>


class userLogin {
  public loginDetails: LoginDetailsMap = {
    "boohoo.com": {
      UK: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHUK@gmail.com",
          Password: "tester123"
        }
      },
      US: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHUS@gmail.com",
          Password: "tester123"
        }
      },
      CA: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHCA@gmail.com",
          Password: "tester123"
        }
      },
      AU: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHAU@gmail.com",
          Password: "tester123"
        }
      },
      IE: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHIE@gmail.com",
          Password: "tester123"
        }
      },
      EU: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHEU@gmail.com",
          Password: "tester123"
        }
      },
      FR: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHFR@gmail.com",
          Password: "tester123"
        }
      },
      NL: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHNL@gmail.com",
          Password: "tester123"
        }
      },
      NZ: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHNZ@gmail.com",
          Password: "tester123"
        }
      },
      NO: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHNO@gmail.com",
          Password: "tester123"
        }
      },
      DK: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHDK@gmail.com",
          Password: "tester123"
        }
      },
      SE: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHSE@gmail.com",
          Password: "tester123"
        }
      },
      DE: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHDE@gmail.com",
          Password: "tester123"
        }
      },
      ES: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHES@gmail.com",
          Password: "tester123"
        }
      },
      IT: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHIT@gmail.com",
          Password: "tester123"
        }
      },
      FI: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHFI@gmail.com",
          Password: "tester123"
        }
      },
      IL: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressBHIL@gmail.com",
          Password: "tester123"
        }
      },
    },
    "nastygal.com": {
      UK: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNGUK@gmail.com",
          Password: "tester123"
        }
      },
      US: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNGUS@gmail.com",
          Password: "tester123"
        }
      },
      CA: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNGCA@gmail.com",
          Password: "tester123"
        }
      },
      AU: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNGAU@gmail.com",
          Password: "tester123"
        }
      },
      IE: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNGIE@gmail.com",
          Password: "tester123"
        }
      },
      EU: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNGEU@gmail.com",
          Password: "tester123"
        }
      },
      FR: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressNG@gmail.com",
          Password: "tester123"
        }
      },
    },
    "karenmillen.com": {
      UK: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressKMUK@gmail.com",
          Password: "tester123"
        }
      },
      US: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressKMUS@gmail.com",
          Password: "tester123"
        }
      },
      AU: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressKMAU@gmail.com",
          Password: "tester123"
        }
      },
    IE: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressKMIE@gmail.com",
          Password: "tester123"
        }
      },
      EU: {
        primaryLoginDetails: {
          Email: "euboohoo+cypressKMEU@gmail.com",
          Password: "tester123"
        }
      },
    }

  }
  /**
  * Returns an address for a locale, given it's the primary test address or secondary test address.
  * @param brand The brand given from the environment variables
  * @param locale The locale given from the environment variables
  * @param type either primaryAddress or secondaryAddress
  * @returns AddressData type with all the details for an address.
  */
  getLogindetailsByLocale(brand: string, locale: string, type: 'primaryLoginDetails'): LoginDetails {
    if (typeof this.loginDetails[brand][locale] === 'undefined') throw new Error('Login could not be found with locale ' + locale);
    // if (typeof this.loginDetails[locale] === 'undefined') throw new Error('Login could not be found with locale ' + locale);

    return this.loginDetails[brand][locale][type] as LoginDetails;
  }

}
export default new userLogin()