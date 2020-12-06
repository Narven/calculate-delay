export interface Outcome {
  eventStage: Stage

  offerTicketDelayLive: Number
  offerTicketDelayUpcoming: Number

  eventTicketDelayLive: Number
  eventTicketDelayUpcoming: Number

  sportTicketDelayLive: Number
  sportTicketDelayUpcoming: Number
};

export enum Stage {
  UPCOMING = 1,
  LIVE = 2,
}

// The delayCalculator function must
// - receive an input of type Outcome Array
// - return an output of type Number
export type DelayCalculator = (input: Outcome[]) => Number

// Please put your code here
export const delayCalculator: DelayCalculator = (input) => {
  let output = 0

  for (let i = 0; i < input.length; i++) {
    let value = 0
    switch (input[i].eventStage) {
      case Stage.UPCOMING:
        const { offerTicketDelayUpcoming, eventTicketDelayUpcoming, sportTicketDelayUpcoming } = input[i]

        const delayUpcoming = {
          offerTicketDelayUpcoming, eventTicketDelayUpcoming, sportTicketDelayUpcoming
        }

        const maxDelayUpcomingKey = (Object.keys(delayUpcoming) as Array<keyof typeof delayUpcoming>)
          .reduce((acc, b) => delayUpcoming[acc] > delayUpcoming[b] ? acc : b)

        value = Number(delayUpcoming[maxDelayUpcomingKey])
        break
      case Stage.LIVE:
        const { offerTicketDelayLive, eventTicketDelayLive, sportTicketDelayLive } = input[i]

        const delayLive = {
          offerTicketDelayLive, eventTicketDelayLive, sportTicketDelayLive
        }

        const maxDelayLiveKey = (Object.keys(delayLive) as Array<keyof typeof delayLive>)
          .reduce((acc, b) => delayLive[acc] > delayLive[b] ? acc : b)

        value = Number(delayLive[maxDelayLiveKey])
        break
    }

    output = value > output ? value : output
  }

  return Number(output)
}
