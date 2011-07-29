!SLIDE bullets incremental

# Django Integration #

* Just Works
* No Integration With Django Models
* [Django Riak Sessions](https://github.com/flashingpumpkin/django-riak-sessions)

!SLIDE small

## Installation

    pip install django-riak-sessions

!SLIDE small

## Integration

    @@@python
    SESSION_ENGINE = 'riak_sessions.backends.riak'

!SLIDE small

## Configuration

    @@@ python
    import riak
    RIAK_PORT = 8087
    RIAK_TRANSPORT_CLASS = riak.RiakPbcTransport
    RIAK_BUCKET = 'django-riak-sessions'
    RIAK_SESSION_KEY = 'session:%(session_key)s'
