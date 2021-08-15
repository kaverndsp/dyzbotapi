import sys

index = str(sys.argv[1])

def return_tweet(index):
    print(str(index))
    sys.stdout.flush()


return_tweet(index)