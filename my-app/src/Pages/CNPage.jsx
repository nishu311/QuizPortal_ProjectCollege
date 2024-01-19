import React from "react"
import Header from "../componants/Layout/Header";

const CNPage = () => {
  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-slate-100">
    <Header activeHeading={1} />
   <div class="w-full  w-4/5					p-9 my-10 mx-12 bg-black-400 border border-gray-800 rounded-lg shadow sm:p-12 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
    Which one of the following is not a client-server application? [GATE CSE 2010]
    </h5>
    <ul class="my-4 space-y-3">
<li>
    (A) Internet Chat

    (B) Web Browsing

    (C) Email

    (D) ping
</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">d ( Ping is not a client server application. Ping is a computer network administration utility used to test the reachability of a host on an Internet Protocol (IP). In ping, there is no server that provides a service.
)</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
The transport layer protocols used for real time multimedia, file transfer, DNS and email, respectively are:

    </h5>
    <ul >
<li>
    (A) TCP, UDP, UDP and TCP


    (B) UDP, TCP, TCP and UDP


    (C) UDP, TCP, UDP and TCP


    (D) TCP, UDP, TCP and UDP

</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">c (TCP (Transmission Control Protocol) and UDP(User Datagram Protocol) are two main transport layer protocols. TCP is connection oriented and UDP is connectionless, this makes TCP more reliable than UDP. But UDP is stateless (less overhead), that makes UDP is suitable for purposes where error checking and correction is less important than timely delivery. For real time multimedia, timely delivery is more important than correctness. -- UDP For file transfer, correctness is necessary. -- TCP DNS, timely delivery is more important -- UDP Email again same as file transfer -- TCP)
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
After the update in the previous question, the link N1-N2 goes down. N2 will reflect this change immediately in its distance vector as cost, ∞. After the NEXT ROUND of update, what will be cost to N1 in the distance vector of N3? 


    </h5>
    <ul >
<li>
(A) 3 
(B) 9 
(C) 10 
(D) ∞ 
</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">c (In the next round, N3 will receive distance from N2 to N1 as infinite. It will receive distance from N4 to N1 as 8. So it will update distance to N1 as 8 + 2. )
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
Which is the applicable level protocol user in each activity? 


    </h5>
    <ul >
<li>
(A) m1:HTTP, m2:SMTP, m3:POP 
(B) m1:SMTP, m2:FTP, m3:HTTP 
(C) m1:SMTP, m2:POP, m3:HTTP 
(D) m1:POP, m2:SMTP, m3:IMAP
</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">c (Simple Mail Transfer Protocol (SMTP) is typically used by user clients for sending mails. 
Post Office Protocol (POP) is used by clients for receiving mails. 
Checking mails in web browser is a simple HTTP process. )
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
 A layer-4 firewall ( a device that can look at all protocol headers up to the transport layer) CANNOT 


    </h5>
    <ul >
<li>
(A) block HTTP traffic during 9:00PM and 5:00AM 
(B) block all ICMP traffic 
(C) stop incoming traffic from a specific IP address but allow outgoing traffic to same IP 
(D) block TCP traffic from a specific user on a specific IP address on multi-user system during 9:00PM and 5:00AM 

</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">A (HTTP is an application layer protocol. Since firewall is at layer 4, it cannot block HTTP data. 

)
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
In the IPv4 addressing format, the number of networks allowed under Class C addresses is [GATE CSE 2012]



    </h5>
    <ul >
<li>
(A) 2^14 

(B) 2^7 

(C) 2^21 

(D) 2^24 

</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">c (In class C, 8 bits are reserved for Host Id and 24 bits are reserved for Network Id. Out of these 24 Network Id bits, the leading 3 bits are fixed as 110. So remaining 21 bits can be used for different networks. See this for more details. 

)
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
An Internet Service Provider(ISP) has the following chunk of CIDR-based IP addresses available with it:245.248.128.0/20. The ISP wants to give half of this chunk of addresses to Organization A, and a quarter to Organization B while retaining the remaining with itself. Which of the following is a valid allocation of addresses to A and B? [GATE CSE 2012]

    </h5>
    <ul >

(A) 245.248.136.0/21 and 245.248.128.0/22 
(B) 245.248.128.0/21 and 245.248.128.0/22 
(C) 245.248.132.0/22 and 245.248.132.0/21 
(D) 245.248.136.0/22 and 245.248.132.0/21 

</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">A (Since the routing prefix is 20, the ISP has 2^(32-20) or 2^12 addresses. Out of these 2^12 addresses, half (or 2^11) addresses have to be given to organization A, and a quarter (2^10) addresses have to be given to organization B. So routing prefix for organization A will be 21. For B, it will be 22. If we see all options given in the question, only options (A) and (B) are left as only these options have the same number of routing prefixes. Now we need to choose from options (A) and (B). 
To assign addresses to organization A, ISP needs to take the first 20 bits from 245.248.128.0 and fix the 21st bit as 0 or 1. Similarly, ISP needs to fix the 21st and 22nd bits for organization B. If we take a closer look at options (A) and (B), we can see the 21st and 22nd bits for organization B are considered as 0 in both options. So 21st bit of organization A must be 1. Now take the first 20 bits from 245.248.128.0 and the 21st bit as 1, we get addresses for organization A as 245.248.136.0/21)
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">Consider an instance of TCP’s Additive Increase Multiplicative Decrease (AIMD) algorithm where the window size at the start of the slow start phase is 2 MSS and the threshold at the start of the first transmission is 8 MSS. Assume that a timeout occurs during the fifth transmission. Find the congestion window size at the end of the tenth transmission.
</h5>
    <ul >
<li>
    (A) 8ms


    (B) 14ms


    (C) 7ms


    (D) 5ms

</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">c (Since Slow Start is used, the window size is increased by the number of segments successfully sent. This happens until either the threshold value is reached or time out occurs. In both of the above situations AIMD is used to avoid congestion. If the threshold is reached, the window size will be increased linearly. If there is a timeout, the window size will be reduced to half. Window size for 1st transmission = 2 MSS Window size for 2nd transmission = 4 MSS Window size for 3rd transmission = 8 MSS threshold reached, increase linearly (according to AIMD) Window size for 4th transmission = 9 MSS Window size for 5th transmission = 10 MSS time out occurs, resend 5th with window size starts with a slow start. Window size for 6th transmission = 2 MSS Window size for 7th transmission = 4 MSS threshold reached, now increase linearly (according to AIMD) Additive Increase: 5 MSS (since 8 MSS isn’t permissible anymore) Window size for 8th transmission = 5 MSS Window size for 9th transmission = 6 MSS Window size for 10th transmission = 7 MSS )
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
Which of the following transport layer protocols is used to support electronic mail?



    </h5>
    <ul >
<li>
    (A) SMTp  


    (B) IP
     (C) UDP


    (D) TCP

</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">D (TCP ( E-mail uses SMTP as application layer protocol. TCP and UDP are two transport layer protocols. SMTP uses TCP as transport layer protocol as TCP is reliable))
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
Suppose computers A and B have IP addresses 10.105.1.113 and 10.105.1.91 respectively and they both use the same netmask N. Which of the values of N given below should not be used if A and B should belong to the same network?


    </h5>
    <ul >
<li>
(A) 255.255.255.0 (B) 255.255.255.128 (C) 255.255.255.192 (D) 255.255.255.224 (D) The last octets of IP
</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">D (addresses of A and B are 113 (01110001) and 91 (01011011). The netmask in option (D) has first three bits set in last octet. If netmask has first 3 bits set, then these bits must be same in A and B, but that is not the case. In simple words, we can say option (D) is not a valid netmask because doing binary ‘&’ of it with addresses of A and B doesn’t give the same network address. It must be same address as A and B are on same network.)
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
 Packets of the same session may be routed through different paths in:


    </h5>
    <ul >
<li>
(a) TCP, but not UDP
(b) TCP and UDP
(c) UDP, but not TCP
(d) Neither TCP nor UDP
</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">B (Packet is the Network layer Protocol Data Unit (PDU). TCP and UDP are Transport layer protocols. Packets of same session may be routed through different routes. Most networks don’t use static routing, but use some form of adaptive routing where the paths used to route two packets for same session may be different due to congestion on some link, or some other reason.)
</p>
<h5 class="mb-3 text-base  my-4 font-semibold text-gray-900 md:text-xl dark:text-white">
The address resolution protocol (ARP) is used for:


    </h5>
    <ul >
<li>
(a) Finding the IP address from the DNS
(b) Finding the IP address of the default gateway
(c) Finding the IP address that corresponds to a MAC address
(d) Finding the MAC address that corresponds to an IP address
</li>
</ul>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">B (Address Resolution Protocol (ARP) is a request and reply protocol used to find MAC address from IP address)
</p>




    </div>
    
    </div>
  )
}

export default CNPage;
