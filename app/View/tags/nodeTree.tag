<%@tag description="display the whole nodeTree" pageEncoding="UTF-8"%>
<%@attribute name="node" type="com.ideaclicks.liferay.spring.domain.CommentPojo" required="true" %>

<%@taglib prefix="template" tagdir="/WEB-INF/tags" %>
<%@ include file="/WEB-INF/jsp/include.jsp" %>

<div style="margin-left:${node.level}px">
	<div style="border: solid;border-width: 2px;border-color: #0094BC;border-radius: 10px;padding: 10px;font-size: 18px;color: #1182FA;	margin-top: 10px;">
		${node.commentsText}
		<br>
		
		<div style="color: #808080;font-family:'dosisregular'; font-size: 14px;line-height: 20px;">
			<fmt:message key="label.submittedby" />
			<span style="color: #0094BC"> ${node.submittedBy} </span>
		</div>
		<br>
		<button type="button" class="i-comment" value="Reply">Reply</button>
		<div class="box comment-container" style="margin-left: auto; margin-right: auto;display:none">
			<input type="hidden" value="${node.commentsId}"  class="comment-id"/>
			<textarea class="comment-box" name="<portlet:namespace />commentsText" 
							title="Submit Your comment"
							style="width: 95%; height: 50px;"></textarea> 
				
						
			<button type="submit" name="submit" value="submit" style="width:100px" class="submitComment">Submit						
			</button>	
		</div>
    </div>
</div>
<c:if test="${node.childComment.size() != 0}">
    <c:forEach var="child" items="${node.childComment}">    	
        <template:nodeTree node="${child}"/>       
    </c:forEach>
</c:if>


<%-- <div style="margin-left:${node.level}px">
	<div style="border: solid;border-width: 2px;border-color: #0094BC;border-radius: 10px;padding: 10px;font-size: 18px;color: #1182FA;	margin-top: 10px;">
		${node.commentsText}
		<br>
		<input type="button" class="i-comment" value="Comments">
		<form:input path="commentsId" name="<portlet:namespace />commentsId" value="${node.commentsId}" readonly="readonly"/>
		<div class="box comment-container" style="margin-left: auto; margin-right: auto;display:none">
			<form:textarea class="comment-box" name="<portlet:namespace />commentsText" path="commentsText"
							title="Submit Your comment"
							style="width: 95%; height: 50px;"></form:textarea> 
				<br>
						
			<form:button type="submit" name="submit" value="submit" style="width:100px">Submit						
			</form:button>	
		</div>
    </div>
</div>
<c:if test="${node.childComment.size() != 0}">
    <c:forEach var="child" items="${node.childComment}">    	
        <template:nodeTree node="${child}" path="${child.commentsId}"/>       
    </c:forEach>
</c:if>


 --%>