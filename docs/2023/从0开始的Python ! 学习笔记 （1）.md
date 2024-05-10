---
catalog:
  - '2023'
date: '2023-08-12 08:00:00'
type: Post
slug: py_diray_1
title: 从0开始的Python | 学习笔记 （1）
status: 已发布
urlname: b841d4d6-8b5c-4496-8ac6-2e1253244f13
updated: '2024-04-06 00:20:00'
---

## 疑惑1     Class的变量混淆疑惑


经常疑惑 Class 里的变量究竟是怎么声明的，在类内部可以，在__init__中挂到 self 上也可以 这两者有什么区别呢？


```python
## 在类内部定义一个变量
class example:
	x1=1
e1=example()
>> e1.x1
#return 1
```


```python
## 在self上挂一个变量
class example:
	def __init__(self):
			self.x2=1
e1=example()
>> e1.x2
#return 1
```


### Answer

- `example.x1` 是一个类变量（Class Variable），它在类的所有实例之间共享。这意味着，如果你改变了一个实例的 `x1`，那么所有的实例都会受到影响，因为 `x1` 是属于类的，而不是单独的实例。
- `example.x2`  是实例变量（Instance Variables），它们是每个单独的实例所特有的。如果你改变了一个实例的 `x2`，那么只有这个实例会受到影响，其他的实例不会受到影响。

### 示例代码


下面是一个示例代码，展示了 Python 类变量和实例变量的区别：


```python
class MyClass:  
    # 类变量  
    class_var = 0  
      
    # 实例变量  
    def __init__(self, instance_var):  
        self.instance_var = instance_var  
          
# 创建实例1  
instance1 = MyClass(10)  
print(instance1.instance_var)  # 输出：10  
print(MyClass.class_var)  # 输出：0  
  
# 创建实例2  
instance2 = MyClass(20)  
print(instance2.instance_var)  # 输出：20  
print(MyClass.class_var)  # 输出：0  
  
# 修改实例1的实例变量  
instance1.instance_var = 30  
print(instance1.instance_var)  # 输出：30  
print(instance2.instance_var)  # 输出：20  
  
# 修改类变量  
MyClass.class_var = 100  
print(instance1.class_var)  # 输出：100  
print(instance2.class_var)  # 输出：100

```


在这个示例中，我们定义了一个名为 `MyClass` 的类，其中包含一个类变量 `class_var` 和一个实例变量 `instance_var`。我们创建了两个实例 `instance1` 和 `instance2`，并分别给它们的实例变量赋值。然后，我们分别打印了这两个实例的实例变量和类变量。


我们可以看到，类变量的值在整个类中是共享的，无论是在哪个实例中修改它，都会影响到所有的实例。而实例变量是每个实例特有的，修改一个实例的实例变量并不会影响到其他的实例。


恍然大悟，其实为了尽量隔离每个实例的变量，我们经常用的还是self的方式声明类和对象内部的变量。若想保持一个公共的变量，可以使用类变量。并且 self 代表的意思也是实例的意思，__init__中的第一个参数是一个类的实例。

