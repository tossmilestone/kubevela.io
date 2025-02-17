---
title:  Alibaba Cloud ACK
---

## Description

Terraform configuration for Alibaba Cloud ACK cluster

## Samples

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: ack-cloud-source
spec:
  components:
    - name: ack-cluster
      type: alibaba-ack
      properties:
        writeConnectionSecretToRef:
          name: ack-conn
          namespace: vela-system
```

## Specification


### Properties

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 number_format | The number format used to output. | string | true |  
 k8s_name_prefix | The name prefix used to create several kubernetes clusters. Default to variable `example_name` | string | true |  
 master_instance_types | The ecs instance types used to launch master nodes. | list(any) | true |  
 install_cloud_monitor | Install cloud monitor agent on ECS. | bool | true |  
 k8s_service_cidr | The kubernetes service cidr block. It cannot be equals to vpc's or vswitch's or pod's and cannot be in them. | string | true |  
 vpc_name | The vpc name used to create a new vpc when 'vpc_id' is not specified. Default to variable `example_name` | string | true |  
 vswitch_cidrs | List of cidr blocks used to create several new vswitches when 'vswitch_ids' is not specified. | list(any) | true |  
 password | The password of ECS instance. | string | true |  
 k8s_worker_number | The number of worker nodes in kubernetes cluster. | number | true |  
 k8s_pod_cidr | The kubernetes pod cidr block. It cannot be equals to vpc's or vswitch's and cannot be in them. | string | true |  
 k8s_version | The version of the kubernetes version.  Valid values: '1.16.6-aliyun.1','1.14.8-aliyun.1'. Default to '1.16.6-aliyun.1'. | string | true |  
 cpu_core_count | CPU core count is used to fetch instance types. | number | true |  
 memory_size | Memory size used to fetch instance types. | number | true |  
 new_nat_gateway | Whether to create a new nat gateway. In this template, a new nat gateway will create a nat gateway, eip and server snat entries. | bool | true |  
 worker_instance_types | The ecs instance types used to launch worker nodes. | list(any) | true |  
 zone_id | Availability Zone ID | string | true |  
 vpc_cidr | The cidr block used to launch a new vpc when 'vpc_id' is not specified. | string | true |  
 vswitch_name_prefix | The vswitch name prefix used to create several new vswitches. Default to variable 'example_name'. | string | true |  
 vswitch_ids | List of existing vswitch id. | list(any) | true |  
 node_cidr_mask | The node cidr block to specific how many pods can run on single node. Valid values: [24-28]. | number | true |  
 enable_ssh | Enable login to the node through SSH. | bool | true |  
 cpu_policy | kubelet cpu policy. Valid values: 'none','static'. Default to 'none'. | string | true |  
 proxy_mode | Proxy mode is option of kube-proxy. Valid values: 'ipvs','iptables'. Default to 'iptables'. | string | true |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  


### Outputs

If `writeConnectionSecretToRef` is set, a secret will be generated with these keys as below:

 Name | Description 
 ------------ | ------------- 
 CLUSTER_ID | The ID of the cluster
 NAME | The name of the kubernetes cluster.
 KUBECONFIG | The KubeConfig string of the kubernetes cluster.
 CLUSTER_CA_CERT | The CA certificate of the kubernetes cluster.
 CLIENT_CERT | The client certificate of the kubernetes cluster.
 CLIENT_KEY | The client key of the kubernetes cluster.
 API_SERVER_INTERNET | The internet access of the kubernetes api server.
 RESOURCE_IDENTIFIER | The identifier of the resource
