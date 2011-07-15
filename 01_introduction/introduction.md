!SLIDE 

# Webinary: Riak and Python #

!SLIDE bullets incremental

# Why Python? #

* Long history at Basho
* Language of choice for several internal tools
* Python one of the earliest supported languages
* More and more Pythonistas discover Riak

!SLIDE bullets incremental

# Getting Started #

* [Download](http://downloads.basho.com/riak-search/CURRENT/) and install Riak Search
* Install the Riak Python client:
  `pip install riak`

!SLIDE bullets incremental

# The Python Client #

* Protocol Buffers and HTTP
* MapReduce support
* Search built-in

!SLIDE

# Basic Operations #

    @@@ python
    import riak

    client = riak.RiakClient()

!SLIDE

# Different Host and Port #

    @@@ python
    client = riak.RiakClient(host="192.168.2.1", port=8080)

!SLIDE small

# Different Transports #

    @@@ python
    from riak.transports.pbc import RiakPbcTransport

    client = riak.RiakClient(transport_class=RiakPbcTransport,
                             port=8087)

!SLIDE small

# Buckets #

    @@@ python
    bucket = client.bucket("programming-languages")

    bucket.get_properties()

    bucket.set_property({"allow_mult": True})

!SLIDE small

# Objects #

    @@@ python
    data = {"type": "scripting", "flavour": "object-oriented"}
    python = bucket.new("python", data)

!SLIDE

* Automatically chooses `application/json`

!SLIDE small

# Binary data #

    @@@ python
    data = open("hulk.jpg").read()
