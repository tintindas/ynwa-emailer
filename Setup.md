# Setup

## For Liverpool fans

Just a raise an issue with your email address and I will add you to the mailing list. **YNWA**

## For other footie fans

Fork the repository and set up the following environment variables

## Google Set up

1. Go to the following link to set up an app password for your google account.

      [Link](https://myaccount.google.com/apppasswords)
      
1. Set secrets
      ```
      FROM: <your username>
      PASSWORD: <generated password>
      ```
     
## Football Data

1. Go to [Football-Data.Org](https://www.football-data.org/) and create a free account.
1. Set secret ```FOOTBALL_API_TOKEN: <api token from football-data.org>```

## Countdown GIF

1. Go to [CountDownMail.com](https://countdownmail.com/) and set up a free account.
1. Get the api key from the profile section.
1. Set secret ```TIMER_API_TOKEN: <api token from countdownmail.com>```

## Config

In the config.json file set your favourite team and the league they play in.

```json
{
  "competition":"premier league",
  "team":"liverpool fc"
}
```

The config will be updated on the next push. Alternatively, you can run the updateConfig.js file manually.

Refer to the competitions.json file and the team.json file in the data folder for supported leagues and team names.
